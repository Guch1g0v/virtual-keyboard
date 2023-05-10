import { lettersDigits } from '../../state/keyboardButtons';
import { UTILS } from '../../utils/utils';

const cotrolBtns = ['ControlLeft', 'ControlRight'];
const altBtns = ['AltLeft', 'AltRight'];
const arrowsLeftUp = ['ArrowLeft', 'ArrowUp'];
const arrowsRightDown = ['ArrowRight', 'ArrowDown'];
const shiftBtns = ['ShiftRight', 'ShiftLeft'];
const tabEnter = [UTILS.CONSTANTS.tab, UTILS.CONSTANTS.enter];

function doFunctionAction(textArea, button) {
  if (button.id === UTILS.CONSTANTS.backspace) UTILS.backspaceChar(textArea);
  if (button.id === UTILS.CONSTANTS.delete) UTILS.deleteChar(textArea);
  if (button.id === UTILS.CONSTANTS.space) UTILS.printSpace(textArea);
  if (arrowsLeftUp.includes(button.id)) UTILS.leftUpCursor(textArea);
  if (arrowsRightDown.includes(button.id)) UTILS.rightDownCursor(textArea);
}

function deselectDoubleBtns(button, state) {
  if (shiftBtns.includes(button.id)) {
    UTILS.removeDoubleByClick(state, UTILS.CONSTANTS.keyShiftSelector, 'shift');
    UTILS.changeByState(state);
  } else if (cotrolBtns.includes(button.id)) {
    UTILS.removeDoubleByClick(state, UTILS.CONSTANTS.keyCotrolSelector, 'ctrl');
  } else if (altBtns.includes(button.id)) {
    UTILS.removeDoubleByClick(state, UTILS.CONSTANTS.keyAltSelector, 'alt');
  }
}

function changeLanguage(button, state) {
  if (altBtns.includes(button.id) && state.ctrl) {
    UTILS.changeLanguage(state);
    UTILS.changeByState(state);
  } else if (cotrolBtns.includes(button.id) && state.alt) {
    UTILS.changeLanguage(state);
    UTILS.changeByState(state);
  }
}

function makeCapslockEvent(button) {
  const { capslock } = UTILS.CONSTANTS;
  if (button.id === UTILS.CONSTANTS.capslock) {
    const custom = new KeyboardEvent('keydown', { code: capslock, key: capslock });
    dispatchEvent(custom);
  }
}

function printRegularChar(button, textArea, state) {
  if (lettersDigits.includes(button.id) || tabEnter.includes(button.id)) {
    const char = UTILS.findChar(button, state);
    UTILS.insertChar(textArea, char);
    textArea.focus();
  }
}

function keyboardClick(event) {
  const textArea = document.querySelector(UTILS.CONSTANTS.textAreaId);
  textArea.focus();
  const button = event.target.closest('BUTTON');
  if (!button) return;
  printRegularChar(button, textArea, this.state);
  makeCapslockEvent(button);
  doFunctionAction(textArea, button);
  deselectDoubleBtns(button, this.state);
  changeLanguage(button, this.state);
  textArea.focus();
}

export default keyboardClick;
