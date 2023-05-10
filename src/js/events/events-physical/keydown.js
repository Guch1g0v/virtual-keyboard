import { keyboardButtons, lettersDigits } from '../../state/keyboardButtons';
import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function makeColorKey(code) {
  if (!code) return;
  const keyHtml = document.querySelector(`#${code}`);
  if (keyHtml) {
    if (code === CONSTANTS.capslock) {
      keyHtml.classList.toggle(CONSTANTS.activeBtn);
    } else keyHtml.classList.add(CONSTANTS.activeBtn);
  }
}

function keyDown(event) {
  const textArea = document.querySelector(CONSTANTS.textAreaId);
  textArea.focus();
  if ((this.state.ctrl && event.altKey) || (this.state.alt && event.ctrlKey)) {
    UTILS.changeLanguage(this.state);
  }
  if (event.key === CONSTANTS.ctrl) this.state.ctrl = true;
  if (event.key === CONSTANTS.alt) this.state.alt = true;
  if (event.key === CONSTANTS.capslock) {
    this.state.capslock = !this.state.capslock;
  }
  if (event.key === CONSTANTS.shift) this.state.shift = true;
  UTILS.changeByState(this.state);
  if ((lettersDigits.includes(event.code) || event.code === CONSTANTS.tab) && !event.ctrlKey) {
    const char = UTILS.findCharKeyDown(event, this.state, keyboardButtons);
    UTILS.insertChar(textArea, char);
  }
  if (event.key === CONSTANTS.alt) event.preventDefault();
  makeColorKey(event.code, this.state);
  textArea.focus();
}

export default keyDown;
