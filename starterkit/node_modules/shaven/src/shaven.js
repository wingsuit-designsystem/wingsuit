// Shaven {{ VERSION }} by Adrian Sieber (adriansieber.com)


// array: Array containing the DOM fragment in JsonML
// returnObject: Contains elements identified by their id

window.shaven = function dom (array, namespace, returnObject) {

	'use strict'

	var doc = document
	var i = 1
	var unescaped
	var callback
	var attributeKey


	// Set on first iteration
	returnObject = returnObject || {}

	// Set default namespace to XHTML namespace
	namespace = namespace || 'http://www.w3.org/1999/xhtml'

	// Create DOM element from syntax sugar string
	function createElement (sugarString) {

		var tags = sugarString.match(/^[\w-]+/)
		var tag = tags ? tags[0] : 'div'
		var element = doc.createElementNS(namespace, tag)
		var id = sugarString.match(/#([\w-]+)/)
		var ref = sugarString.match(/\$([\w-]+)/)
		var classNames = sugarString.match(/\.[\w-]+/g)


		// Assign id if is set
		if (id) {
			element.id = id[1]

			// Add element to the return object
			returnObject[id[1]] = element
		}

		// Create reference to the element and add it to the return object
		if (ref)
			returnObject[ref[1]] = element

		// Assign class if is set
		if (classNames)
			element.setAttribute(
				'class',
				classNames.join(' ').replace(/\./g, '')
			)

		// Don't escape HTML content
		if (sugarString.match(/&$/g))
			unescaped = true

		// Return DOM element
		return element
	}

	function replacer (key, value) {

		if (value === null || value === false || value === undefined)
			return

		if (typeof value !== 'string' && typeof value !== 'object')
			return String(value)

		return value
	}


	if (typeof array[0] === 'string')
		array[0] = createElement(array[0])

	else if (Array.isArray(array[0]))
		i = 0

	else if (!(array[0] instanceof Element))
		throw new Error(
			'First element of array must be either a string, ' +
			'an array or a DOM element and not ' + JSON.stringify(array[0])
		)


	// For each in the element array (except the first)
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

		// If is string has to be content so set it
		else if (typeof array[i] === 'string' || typeof array[i] === 'number')
			if (unescaped)
				array[0].innerHTML = array[i]

			else
				array[0].appendChild(doc.createTextNode(array[i]))

		// If is array has to be child element
		else if (Array.isArray(array[i])) {

			if (Array.isArray(array[i][0])) {
				array[i].reverse().forEach(function (subArray) {
					array.splice(i + 1, 0, subArray)
				})

				if (i !== 0)
					continue
				i++
			}

			// Use shaven recursively for all child elements
			dom(array[i], namespace, returnObject)

			// Append the element to its parent element
			if (array[i][0])
				array[0].appendChild(array[i][0])
		}

		else if (typeof array[i] === 'function')
			callback = array[i]

		// If it is an element append it
		else if (array[i] instanceof Element)
			array[0].appendChild(array[i])

		// Else must be an object with attributes
		else if (typeof array[i] === 'object') {
			// For each attribute
			for (attributeKey in array[i])
				if (array[i].hasOwnProperty(attributeKey)) {

					if (array[i][attributeKey] !== null &&
						array[i][attributeKey] !== false)
						if (array[i][attributeKey] === undefined)
							array[0].setAttribute(attributeKey, '')

						else {
							if (attributeKey === 'style' &&
								typeof array[i][attributeKey] === 'object')

								array[0].setAttribute(
									attributeKey,
									JSON
										.stringify(array[i][attributeKey], replacer)
										.slice(2, -2)
										.replace(/","/g, ';')
										.replace(/":"/g, ':')
										.replace(/\\"/g, '\'')
								)

							else
								array[0].setAttribute(
									attributeKey,
									array[i][attributeKey]
								)
						}
				}
		}
		else
			throw new TypeError('"' + array[i] + '" is not allowed as a value.')
	}


	// Return root element on index 0
	returnObject[0] = array[0]

	if (callback)
		callback(array[0])

	// returns object containing all elements with an id and the root element
	return returnObject
}
