import './less/index.less';
import { JmdEditor } from './JmdEditor';

export default function (container, options) {
  const el = typeof container === 'string' ? document.querySelector(container) : container;
  return new JmdEditor(el, options);
}
