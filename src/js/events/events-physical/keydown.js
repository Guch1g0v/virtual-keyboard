import { lettersDigits, keyboardButtons } from '../../state/keyboardButtons';
import { UTILS } from '../../utils/utils';
import { removeDoubleByClick } from '../events-virtual/keyboard-click';

const { CONSTANTS } = UTILS;

function makeColorKey(code) {
  if (!code) return;
  const keyHtml = document.querySelector(`#${code}`);
  if (keyHtml) {
    if (code === CONSTANTS.capslock) keyHtml.classList.toggle(CONSTANTS.activeBtn);
    else keyHtml.classList.add(CONSTANTS.activeBtn);
  }
}

function keyDown(event) {
  const textArea = document.querySelector(CONSTANTS.textAreaId);
  textArea.focus();

  if ((this.state.ctrl && event.altKey) || (this.state.alt && event.ctrlKey)) {
    if (this.state.getLang() === this.state.addLang) {
      this.state.setLang(this.state.mainLang);
    } else this.state.setLang(this.state.addLang);
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyAltSelector, 'alt');
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyCotrolSelector, 'ctrl');
  }

  if (event.key === CONSTANTS.ctrl) {
    this.state.ctrl = true;
  }
  if (event.key === CONSTANTS.alt) {
    this.state.alt = true;
  }
  if ((event.key === CONSTANTS.alt && event.ctrlKey)
  || (event.key === CONSTANTS.ctrl && event.altKey)) {
    if (this.state.getLang() === this.state.addLang) {
      this.state.setLang(this.state.mainLang);
    } else this.state.setLang(this.state.addLang);
  }
  if (event.key === CONSTANTS.capslock) {
    this.state.capslock = !this.state.capslock;
  }
  if (event.key === CONSTANTS.shift) {
    this.state.shift = true;
  }
  UTILS.changeByState(this.state);
  if ((lettersDigits.includes(event.code) || event.code === CONSTANTS.tab) && !event.ctrlKey) {
    event.preventDefault();
    let char;
    if (event.key === CONSTANTS.tab) char = CONSTANTS.tabSym;
    else char = keyboardButtons[event.code][this.state.lang][this.state.getCondition()];
    UTILS.insertChar(textArea, char);
  }
  if (event.key === CONSTANTS.alt) event.preventDefault();
  makeColorKey(event.code, this.state);
  textArea.focus();
  console.log(event)
}

export default keyDown;
