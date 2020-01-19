var escape = require('escape-html')

// TODO: remove namespace

module.exports = function shaven (array, namespace, returnObject) {

	'use strict'

	var i = 1
	var doesEscape = true
	var HTMLString
	var attributeKey
	var callback
	var key


	returnObject = returnObject || {}


	function createElement (sugarString) {

		var tags = sugarString.match(/^[\w-]+/)
		var element = {
			tag: tags ? tags[0] : 'div',
			attr: {},
			children: []
		}
		var id = sugarString.match(/#([\w-]+)/)
		var reference = sugarString.match(/\$([\w-]+)/)
		var classNames = sugarString.match(/\.[\w-]+/g)


		// Assign id if is set
		if (id) {
			element.attr.id = id[1]

			// Add element to the return object
			returnObject[id[1]] = element
		}

		if (reference)
			returnObject[reference[1]] = element

		if (classNames)
			element.attr.class = classNames.join(' ').replace(/\./g, '')

		if (sugarString.match(/&$/g))
			doesEscape = false

		return element
	}

	function replacer (key, value) {

		if (value === null || value === false || value === undefined)
			return

		if (typeof value !== 'string' && typeof value !== 'object')
			return String(value)

		return value
	}

	function escapeAttribute (string) {
		return (string || string === 0) ?
			String(string)
				.replace(/&/g, '&amp;')
				.replace(/"/g, '&quot;') :
			''
	}

	function escapeHTML (string) {
		return String(string)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
	}


	if (typeof array[0] === 'string')
		array[0] = createElement(array[0])

	else if (Array.isArray(array[0]))
		i = 0

	else
		throw new Error(
			'First element of array must be a string, ' +
			'or an array and not ' + JSON.stringify(array[0])
		)


	for (; i < array.length; i++) {

		// Don't render element if value is false or null
		if (array[i] === false || array[i] === null) {
			array[0] = false
			break
		}

		// Continue with next array value if current value is undefined or true
		else if (array[i] === undefined || array[i] === true) {
			continue
		}

		else if (typeof array[i] === 'string') {
			if (doesEscape)
				array[i] = escapeHTML(array[i])

			array[0].children.push(array[i])
		}

		else if (typeof array[i] === 'number') {

			array[0].children.push(array[i])
		}

		else if (Array.isArray(array[i])) {

			if (Array.isArray(array[i][0])) {
				array[i].reverse().forEach(function (subArray) {
					array.splice(i + 1, 0, subArray)
				})

				if (i !== 0)
					continue
				i++
			}

			shaven(array[i], namespace, returnObject)

			if (array[i][0])
				array[0].children.push(array[i][0])
		}

		else if (typeof array[i] === 'function')
			callback = array[i]


		else if (typeof array[i] === 'object') {
			for (attributeKey in array[i])
				if (array[i].hasOwnProperty(attributeKey))
					if (array[i][attributeKey] !== null &&
						array[i][attributeKey] !== false)
						if (attributeKey === 'style' &&
							typeof array[i][attributeKey] === 'object')
							array[0].attr[attributeKey] = JSON
								.stringify(array[i][attributeKey], replacer)
								.slice(2, -2)
								.replace(/","/g, ';')
								.replace(/":"/g, ':')
								.replace(/\\"/g, '\'')

						else
							array[0].attr[attributeKey] = array[i][attributeKey]
		}

		else
			throw new TypeError('"' + array[i] + '" is not allowed as a value.')
	}


	if (array[0] !== false) {

		HTMLString = '<' + array[0].tag

		for (key in array[0].attr)
			if (array[0].attr.hasOwnProperty(key))
				HTMLString += ' ' + key + '="' +
					escapeAttribute(array[0].attr[key]) + '"'

		HTMLString += '>'

		array[0].children.forEach(function (child) {
			HTMLString += child
		})

		HTMLString += '</' + array[0].tag + '>'

		array[0] = HTMLString
	}

	// Return root element on index 0
	returnObject[0] = array[0]

	if (callback)
		callback(array[0])

	// returns object containing all elements with an id and the root element
	return returnObject
}
