import { UTILS } from '../utils/utils';

const textPlaceHolder = 'OS Windows \nAlt + Ctrl - change language';

function createTextArea() {
  const textArea = UTILS.createElement('textarea', 'keybord-text-area');
  textArea.setAttribute('id', 'textarea');
  textArea.setAttribute('placeholder', textPlaceHolder);
  return textArea;
}

export default createTextArea;
