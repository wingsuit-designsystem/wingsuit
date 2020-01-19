!function (window, document) {

	'use strict'

	var editors = []
	var textareas

	function fixIndentation (string) {

		// Remove leading tabs and last newline character

		var numberOfTabs
		var matches
		var sortedString

		sortedString = string.split('\n').sort()
		matches = sortedString[sortedString.length - 1].match(/^\s*/)
		numberOfTabs = matches ? matches[0].length : 0

		return string
			.split('\n')
			.map(function (line) {
				return line.substr(numberOfTabs)
			})
			.join('\n')
			.slice(0, -1)
	}


	function getFromArrayById (array, id) {

		var soughtElement = null

		array.some(function (element) {

			if (element.id === id) {
				soughtElement = element
				return true
			}
		})

		return soughtElement
	}

	CodeMirror.defaults.theme = 'twilight'
	CodeMirror.defaults.indentWithTabs = true
	CodeMirror.defaults.indentUnit = 4

	CodeMirror.defineExtension('autoFormat', function () {

		var cm = this
		var totalLines = cm.lineCount()
		var totalChars = cm.getValue().length
		var from = {line: 0, ch: 0}
		var to = {line: totalLines, ch: totalChars}
		var outer = cm.getMode()
		var text = cm.getRange(from, to).split('\n')
		var state = CodeMirror.copyState(outer, cm.getTokenAt(from).state)
		var tabSize = cm.getOption('tabSize')
		var out = ''
		var lines = 0
		var atSol = from.ch === 0
		var i
		var stream
		var inner
		var style
		var cur

		function newline () {
			out += '\n'
			atSol = true
			lines++
		}

		for (i = 0; i < text.length; ++i) {

			stream = new CodeMirror.StringStream(text[i], tabSize)

			while (!stream.eol()) {

				inner = CodeMirror.innerMode(outer, state)
				style = outer.token(stream, state)
				cur = stream.current()

				stream.start = stream.pos

				if (!atSol || /\S/.test(cur)) {
					out += cur
					atSol = false
				}

				if (!atSol && inner.mode.newlineAfterToken &&
					inner.mode.newlineAfterToken(style, cur,
							stream.string.slice(stream.pos) ||
							text[i + 1] || '', inner.state)
					)
					newline()
			}

			if (!stream.pos && outer.blankLine)
				outer.blankLine(state)

			if (!atSol) newline()
		}

		cm.operation(function () {

			cm.replaceRange(out, from, to)

			cur = from.line + 1
			end = from.line + lines

			for (; cur <= end; ++cur)
				cm.indentLine(cur, 'smart')

			//cm.setSelection(from, cm.getCursor(false))
		})
	})


	textareas = document.querySelectorAll('textarea')

	Array.prototype.forEach.call(textareas, function (element) {

		// Fix indentation
		element.innerHTML = fixIndentation(element.innerHTML)

		if (element.dataset.lang === 'js')
			element.dataset.lang = 'javascript'

		var isReadOnly = element.getAttribute('readonly') !== null
		var editor = {
			id: element.getAttribute('id'),
			inputId: element.dataset.input,
			isReadOnly: isReadOnly,
			cm: CodeMirror.fromTextArea(element, {
				readOnly: isReadOnly,
				mode: element.dataset.lang || 'text'
			})
		}

		editors.push(editor)

		if (!isReadOnly)
			editor.cm
				.getWrapperElement()
				.classList
				.add('editable')

		if (editor.inputId)
			getFromArrayById(editors, editor.inputId).cm.on('change', function (instance) {

				try {
					editor
						.cm
						.setValue(shaven(eval(instance.getValue()))[0]
							.outerHTML
							.replace(/></g, '>\n<'))
					editor
						.cm
						.autoFormat()
				}
				catch (error) {
					editor.cm.setValue(error.message)
				}
			})
	})
}(window, document)
