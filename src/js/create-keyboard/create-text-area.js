import { UTILS } from '../utils/utils';

function createTextArea() {
  const textArea = UTILS.createElement('textarea', 'keybord-text-area');
  textArea.setAttribute('id', 'textarea');
  textArea.setAttribute('placeholder', 'OS Windows \nAlt + Ctrl - change language \nEnter text...');
  return textArea;
}

export default createTextArea;
