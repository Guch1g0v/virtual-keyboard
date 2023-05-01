import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function makeNoColorBtn(event) {
  const keyHtml = document.querySelector(`#${event.code}`);
  if (keyHtml && event.code !== CONSTANTS.capslock) {
    keyHtml.classList.remove(CONSTANTS.activeBtn);
  }
  UTILS.removeDoubleKeys(event.key, CONSTANTS.shift, CONSTANTS.keyShiftSelector);
  UTILS.removeDoubleKeys(event.key, CONSTANTS.ctrl, CONSTANTS.keyCotrolSelector);
  UTILS.removeDoubleKeys(event.key, CONSTANTS.alt, CONSTANTS.keyAltSelector);
}

function keyUp(event) {
  if (!event.code) return;
  const textArea = document.querySelector(CONSTANTS.textAreaId);
  if (event.key === CONSTANTS.shift) {
    this.state.shift = false;
    UTILS.changeByState(this.state);
  }
  if (event.key === CONSTANTS.ctrl) {
    this.state.ctrl = false;
    UTILS.changeByState(this.state);
  }
  if (event.key === CONSTANTS.alt) {
    this.state.alt = false;
    UTILS.changeByState(this.state);
  }
  textArea.focus();
  makeNoColorBtn(event, this.state);
}

export default keyUp;
