import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown.js';
import CodeMirror from 'codemirror';
import marked from 'marked';

import template from './template.html';

export class JmdEditor {
  constructor(el, options) {
    el.innerHTML = template;
    var editor = CodeMirror.fromTextArea(document.getElementById('myEditor'), {
      mode: 'markdown',
      // lineNumbers: true,
      theme: 'default',
      extraKeys: { 'Enter': 'newlineAndIndentContinueMarkdownList' }
    });
  }
}
