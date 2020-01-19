'use strict'

let path
let assert
let jsdom
let shaven

const scope = {}
const isBrowser = (typeof window !== 'undefined')

function getById (id, window) {
	return window.document.getElementById(id)
}

function sortElementAttributes (element) {
	// From http://stackoverflow.com/a/13754747/1850340
	const attrs = element.attributes
	const serializer = new XMLSerializer()
	let i = attrs.length
	const l = i
	const nodeArr = []
	let nodeArrKeys = []

	for (i; i--;) {
		const name = attrs[i].nodeName
		nodeArr[name] = (attrs.removeNamedItem(name))
		nodeArrKeys[i] = name
	}

	nodeArrKeys = nodeArrKeys.sort()
	i++

	for (i; l > i; i++) {
		attrs.setNamedItem(nodeArr[nodeArrKeys[i]])
	}

	console.log(serializer.serializeToString(element));
}

function runTestSuite (environment) {

	function testInEnv (html, callback) {

		if (environment === 'browser')
			callback(null, window)

		else if (environment === 'jsdom')
			jsdom.env({
				html: html,
				scripts: path.resolve('src/shaven.js'),
				done: callback
			})

		else if (environment === 'nodejs') {
			scope.shaven = shaven
			callback(null, scope)
		}

	}


	afterEach(() => {
		if (environment === 'browser')
			getById('test', window).innerHTML = ''
	})


	describe('Shaven in ' + environment + ' environment',  () => {

		if (environment === 'browser' || environment === 'jsdom') {

			it('attaches to elements', (done) => {

				testInEnv('<div id="test"></div>', (error, window) => {
					assert.ifError(error)

					const expected = '<div id="test"><p></p></div>'
					const actual = window
						.shaven([getById('test', window), ['p']])[0]
						.outerHTML

					assert.strictEqual(actual, expected, actual)

					done()
				})
			})


			it('appends html elements', (done) => {

				testInEnv('<div id="test"></div>', (error, window) => {

					assert.ifError(error)

					const expected = '<div id="test"><p></p></div>'
					const element = window.shaven(['p'])[0]
					const actual = window
						.shaven([getById('test', window), element])[0]
						.outerHTML

					assert.strictEqual(actual, expected, actual)

					done()
				})
			})


			it('supports hyphens in html tags', (done) => {

				testInEnv('<div id="test"></div>', (error, window) => {
					assert.ifError(error)

					const expected = '<div id="test">' +
						'<foo-bar></foo-bar>' +
						'</div>'
					const element = window.shaven(['foo-bar'])[0]
					const actual = window
						.shaven([getById('test', window), element])[0]
						.outerHTML

					assert.strictEqual(actual, expected, actual)

					done()
				})
			})


			it('returns a shaven object with element-ids as keys', (done) => {

				testInEnv('<div id="test"></div>', (error, window)  => {

					assert.ifError(error)

					const shavenObject = window.shaven(
						[getById('test', window),
							['p#foo'],
							['p#bar']
						]
					)

					assert.strictEqual(
						shavenObject.foo,
						getById('foo', window)
					)
					assert.strictEqual(
						shavenObject.bar,
						getById('bar', window)
					)
					done()
				})
			})


			it('returns marked elements ', (done) => {

				testInEnv('<div id="test"></div>', (error, window) => {

					assert.ifError(error)

					const shavenObject = window.shaven(
						[getById('test', window),
							['a$foo'],
							['p$bar']
						]
					)

					assert.strictEqual(
						shavenObject.foo,
						window.document.getElementsByTagName('a')[0]
					)
					assert.strictEqual(
						shavenObject.bar,
						window.document.getElementsByTagName('p')[0]
					)
					done()
				})
			})
		}


		it('sets a string as textContent', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<p>test</p>'
				const element = scope.shaven(['p', 'test'])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, expected)
				else
					assert.strictEqual(element.outerHTML, expected)

				done()
			})
		})


		it('sets a number as textContent', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<p>1234</p>'
				const element = scope.shaven(['p', 1234])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, expected)
				else
					assert.strictEqual(element.outerHTML, expected)

				done()
			})
		})


		it('builds elements recursively', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<div><p>foo<em>bar</em></p></div>'
				const actual = scope.shaven(
					['div',
						['p', 'foo',
							['em', 'bar']
						]
					]
				)[0]

				if (environment === 'nodejs')
					assert.strictEqual(actual, expected)
				else
					assert.strictEqual(actual.outerHTML, expected)

				done()
			})
		})


		it('is possible to set properties', (done) => {

			testInEnv('<div id="test"></div>', (error, scope) => {

				assert.ifError(error)

				const expectedString = '<p id="foo" ' +
					'class="bar" data-info="baz"></p>'
				const actual = scope.shaven(
					['p', {
						id: 'foo',
						class: 'bar',  // class is restricted word
						'data-info': 'baz' // attribute with dash
					}]
				)[0]

				if (environment === 'nodejs')
					assert.strictEqual(actual, expectedString)

				else {
					scope.document
						.getElementById('test')
						.innerHTML = expectedString

					const expectedElement = scope.document
						.getElementById('foo')

					assert(
						actual.isEqualNode(expectedElement),
						'\n' + actual.outerHTML + '\nshould equal\n' +
							expectedElement.outerHTML
					)
				}

				done()
			})
		})


		it('does not set falsy properties', (done) => {

			testInEnv('<div id="test"></div>', (error, scope) => {

				assert.ifError(error)

				const expectedString = '<p title="foo" ' +
					'tabindex="3" data-info=""></p>'
				const actual = scope.shaven(
					['p', {
						title: 'foo',
						tabindex: 3,
						lang: false,
						'data-test': null,
						'data-info': undefined
					}]
				)[0]


				if (environment === 'nodejs')
					assert.strictEqual(actual, expectedString)

				else {
					scope.document
						.getElementById('test')
						.innerHTML = expectedString

					const expectedElement = scope.document
						.getElementsByTagName('p')[0]

					assert(
						actual.isEqualNode(expectedElement),
						'\n' + actual.outerHTML + '\nshould equal\n' +
							expectedElement.outerHTML
					)
				}

				done()
			})
		})


		it('builds a string from a style object', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<p ' +
					'style="color:rgb(255,0,0);font-size:10;' +
						'font-family:Arial, \'Helvetica Neue\', ' +
						'sans-serif"></p>'
				const actual = scope.shaven(
					['p', {
						style: {
							color: 'rgb(255,0,0)',
							'font-size': 10,
							'font-family': 'Arial, "Helvetica Neue", sans-serif'
						}
					}]
				)[0]


				if (environment === 'nodejs')
					assert.strictEqual(actual, expected)

				else
					assert.strictEqual(actual.outerHTML, expected)

				done()
			})
		})


		it('does not include falsy values in style string', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<p style="color:red"></p>'
				const actual = scope.shaven(
					['p', {
						style: {
							color: 'red',
							border: false,
							'background-color': null,
							visibility: undefined
						}
					}]
				)[0]


				if (environment === 'nodejs')
					assert.strictEqual(actual, expected)

				else
					assert.strictEqual(actual.outerHTML, expected)

				done()
			})
		})


		it('does ignore "true" values', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const expected = '<p>test</p>'
				const element = scope.shaven(['p', 'test', true])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, expected)
				else
					assert.strictEqual(element.outerHTML, expected)

				done()
			})
		})



		describe('Syntax-sugar string', () => {


			it('uses div as default tag', (done) => {

				testInEnv(null, (error, scope) => {

					assert.ifError(error)

					const expected = '<div id="foo"></div>'
					const element = scope.shaven(['#foo'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expected)
					else
						assert.strictEqual(element.outerHTML, expected)

					done()
				})
			})


			it('sets the id', (done) => {

				testInEnv(null, (error, scope) => {

					assert.ifError(error)

					const expected = '<p id="foo-1"></p>'
					const element = scope.shaven(['p#foo-1'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expected)
					else
						assert.strictEqual(element.outerHTML, expected)

					done()
				})
			})


			it('sets the class', (done) => {

				testInEnv(null, (error, scope) => {

					assert.ifError(error)

					const expected = '<p class="foo"></p>'
					const element = scope.shaven(['p.foo'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expected)
					else
						assert.strictEqual(element.outerHTML, expected)

					done()
				})
			})


			it('works with both class and id', (done) => {

				testInEnv('<div id=test></div>', (error, scope) => {

					assert.ifError(error)

					const expectedString = '<p id="b" class="new"></p>'
					const element = scope.shaven(['p#b.new'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expectedString)

					else {

						scope.document
							.getElementById('test')
							.innerHTML = expectedString

						const expectedElement = scope.document
							.getElementById('b')

						assert(
							element.isEqualNode(expectedElement),
							element.outerHTML +
							'\nshould be equal to\n' +
							expectedElement.outerHTML
						)
					}

					done()
				})
			})


			it('works with class and id reversed', (done) => {

				testInEnv('<div id=test></div>', (error, scope) => {

					assert.ifError(error)

					const expectedString = '<p id="c" class="new"></p>'
					const element = scope.shaven(['p.new#c'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expectedString)

					else {
						scope.document
							.getElementById('test')
							.innerHTML = expectedString

						const expectedElement = scope.document
							.getElementById('c')

						assert(
							element.isEqualNode(expectedElement),
							element.outerHTML +
							'\nshould to be equal to\n' +
							expectedElement.outerHTML
						)
					}
					done()
				})
			})


			it('understands multiple classes and ids', (done) => {

				testInEnv('<div id=test></div>', (error, scope) => {

					assert.ifError(error)

					const expectedString = '<p id="foo" class="bar baz">' +
						'</p>'
					const element = scope.shaven(['p.bar#foo.baz'])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, expectedString)

					else {
						scope.document
							.getElementById('test')
							.innerHTML = expectedString

						const expectedElement = scope.document
							.getElementById('foo')

						assert(
							element.isEqualNode(expectedElement),
							element.outerHTML +
							'\nshould to be equal to\n' +
							expectedElement.outerHTML
						)
					}

					done()
				})
			})
		})


		it('calls the provided callback function', (done) => {

			testInEnv('<div id="test"></div> ', (error, scope) => {

				assert.ifError(error)

				let called = false
				let element = false

				function foo (el) {
					called = true
					element = el
				}

				const shavenObject = scope.shaven(['p#bar', foo])

				assert(called)
				assert.strictEqual(element, shavenObject[0])
				done()
			})
		})


		it(
			'returns a shaven object and not an html element or string',
			(done) => {

				testInEnv(null, function (error, scope) {

					assert.ifError(error)

					const shavenObject = scope.shaven(['p'])

					assert(typeof shavenObject === 'object')
					assert.notStrictEqual(shavenObject.nodeType, 1)
					done()
				})
			}
		)


		it('returns the root html element by referencing [0]', (done) => {

			testInEnv(null, function (error, scope) {

				assert.ifError(error)

				const shavenObject = scope.shaven(['p'])

				if (environment !== 'nodejs')
					assert.strictEqual(shavenObject[0].nodeType, 1)
				else
					assert.strictEqual('<p></p>', shavenObject[0])

				done()
			})
		})


		it('escapes html strings in tags', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const html = '<p>Some <strong>HTML</strong></p>'
				const escapedHtml = '&lt;p&gt;Some ' +
					'&lt;strong&gt;HTML&lt;/strong&gt;' +
					'&lt;/p&gt;'
				const element = scope.shaven(['div', html])[0]

				if (environment === 'nodejs')
					assert.strictEqual(
						element,
						'<div>' + escapedHtml + '</div>'
					)
				else
					assert.strictEqual(element.innerHTML, escapedHtml)

				done()
			})
		})

		it('sets attribute to 0', (done) => {
			testInEnv(null, (error, scope) => {
				assert.ifError(error)

				const html = '<p title="0">Test</p>'
				const element = scope.shaven(['p', 'Test', {title: 0}])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, html)
				else
					assert.strictEqual(element.outerHTML, html)

				done()
			})
		})


		it('escapes html strings in attributes', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const escapedHtml =
					'<p ' +
					'title="&quot; &amp;" ' +
					'lang="\' < >"' +
					'>' +
					'Test' +
					'</p>'
				const element = scope.shaven(
					['p', 'Test', {
						title: '" &',
						lang: '\' < >'
					}]
				)[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, escapedHtml)
				else
					assert.strictEqual(element.outerHTML, escapedHtml)

				done()
			})
		})


		it('builds html from strings', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const html = '<p>Some <strong>HTML</strong></p>'
				const element = scope.shaven(['div&', html])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, '<div>' + html + '</div>')
				else
					assert.strictEqual(element.innerHTML, html)

				done()
			})
		})


		it('accepts an array of elements', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const html = '<p>Numbers: ' +
					'<span>1</span>' +
					'<span>2</span>' +
					'<span>3</span>' +
					'<span>4</span>' +
					'<span>5</span>' +
					'</p>'
				const element = scope.shaven(['p', 'Numbers: ', [
					['span', '1'],
					['span', '2'],
					['span', '3'],
					[
						['span', '4'],
						['span', '5']
					]
				]])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, html)
				else
					assert.strictEqual(element.outerHTML, html)

				done()
			})
		})

		it('accepts an array of elements at index 0', (done) => {

			testInEnv(null, (error, scope) => {

				assert.ifError(error)

				const html = '<p>Numbers: ' +
					'<span>1</span>' +
					'<span>2</span>' +
					'<span>3</span>' +
					'</p>'
				const element = scope.shaven(['p', 'Numbers: ', [
					[
						['span', '1'],
						['span', '2'],
						['span', '3']
					]
				]])[0]

				if (environment === 'nodejs')
					assert.strictEqual(element, html)
				else
					assert.strictEqual(element.outerHTML, html)

				done()
			})
		})

		it('throws an error for an invalid array', (done) => {

			testInEnv(null, (error, scope) => {

				const regexString = '.*first ' +
					'element.*must be.*string.*array.*'

				assert.ifError(error)

				assert.throws(
					() => {
						scope.shaven([{key: 'value'}])
					},
					new RegExp(regexString, 'gi')
				)

				assert.throws(
					() => {
						scope.shaven([144, 'span', 'text'])
					},
					new RegExp(regexString, 'gi')
				)

				done()
			})
		})


		it('works with SVGs', (done) => {

			testInEnv('<div id=test></div>', (error, window) => {

				assert.ifError(error)

				const expectedString = '' +
					'<svg id="svg" height="10" width="10">' +
						'<circle class="top" cx="5" cy="5" r="5" ' +
							'style="fill:green">' +
						'</circle>' +
					'</svg>'
				const array = ['svg#svg',
					{
						height: 10,
						width: 10
					},
					['circle.top', {
						cx: 5,
						cy: 5,
						r: 5,
						style: 'fill:green'
					}]
				]


				if (environment === 'nodejs')
					assert.strictEqual(shaven(array)[0], expectedString)

				else {
					const svgElement = window.shaven(
						array,
						'http://www.w3.org/2000/svg'
					)[0]

					window.document
						.getElementById('test')
						.innerHTML = expectedString

					const expectedElement = window.document
						.getElementById('svg')

					assert(
						svgElement.isEqualNode(expectedElement),
						'\n' + svgElement.outerHTML +
						'\nshould equal\n' +
						expectedElement.outerHTML
					)
				}

				done()
			})
		})

		if (environment === 'browser') {
			it('does not work with SVGs without a namespace', (done) => {

				testInEnv('<div id=test></div>', (error, window) => {

					assert.ifError(error)

					const expectedString = '' +
						'<svg height="10" width="10" id="svg">' +
							'<circle class="top" cx="5" cy="5" r="5" ' +
								'style="fill:green">' +
							'</circle>' +
						'</svg>'
					const array = ['svg#svg',
						{
							height: 10,
							width: 10
						},
						['circle.top', {
							cx: 5,
							cy: 5,
							r: 5,
							style: 'fill:green'
						}]
					]
					const svgElement = window.shaven(array)[0]

					window.document
						.getElementById('test')
						.innerHTML = expectedString

					const expectedElement = window.document
						.getElementById('svg')

					sortElementAttributes(svgElement)
					sortElementAttributes(svgElement.firstChild)
					sortElementAttributes(expectedElement)
					sortElementAttributes(expectedElement.firstChild)

					const areEqual = svgElement.isEqualNode(expectedElement)

					assert(
						(svgElement.outerHTML === expectedElement.outerHTML) &&
						!areEqual,
						'Although the elements have the same outerHTML, ' +
						'they should not be equal nodes.\n' +
						'svgElement:\t\t' + svgElement.outerHTML +
						'\nexpectedElement:\t' + expectedElement.outerHTML +
						'\nAre equal:\t' + areEqual
					)

					done()
				})
			})
		}


		describe('Falsy values', () => {

			it(
				'returns an empty element for missing content value',
				(done) => {

					testInEnv(null, function (error, scope) {

						assert.ifError(error)

						const element = scope.shaven(['div'])[0]

						if (environment === 'nodejs')
							assert.strictEqual(element, '<div></div>')
						else
							assert.strictEqual(
								element.outerHTML,
								'<div></div>'
							)

						done()
					})
				}
			)


			it(
				'returns an empty element for undefined content value',
				(done) => {

					testInEnv(null, function (error, scope) {

						assert.ifError(error)

						const element = scope.shaven(['div', undefined])[0]

						if (environment === 'nodejs')
							assert.strictEqual(element, '<div></div>')
						else
							assert.strictEqual(
								element.outerHTML,
								'<div></div>'
							)
						done()
					})
				}
			)


			it('returns no element if content value is "false"', (done) => {

				testInEnv(null, function (error, scope) {

					assert.ifError(error)

					const element = scope.shaven(['div', ['p', false]])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, '<div></div>')
					else
						assert.strictEqual(element.outerHTML, '<div></div>')

					done()
				})
			})


			it('returns no element if content value is "null"', (done) => {

				testInEnv(null, (error, scope) => {

					assert.ifError(error)

					const element = scope.shaven(['div', ['p', null]])[0]

					if (environment === 'nodejs')
						assert.strictEqual(element, '<div></div>')
					else
						assert.strictEqual(element.outerHTML, '<div></div>')

					done()
				})
			})
		})
	})
}


if (isBrowser) {
	assert = window.assert

	runTestSuite('browser')
}
else {
	path = require('path')
	assert = require('assert')
	jsdom = require('jsdom')
	shaven = require('../src/index.js')

	runTestSuite('nodejs')
	runTestSuite('jsdom')
}
