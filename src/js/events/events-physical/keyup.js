import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function removeDoubleKeys(key, button, selector) {
  if (key === button) {
    const keys = document.querySelectorAll(selector);
    keys.forEach((dbKey) => {
      dbKey.classList.remove(CONSTANTS.activeBtn);
    });
  }
}

function makeNoColorBtn(event) {
  const keyHtml = document.querySelector(`#${event.code}`);
  if (keyHtml && event.code !== CONSTANTS.capslock) {
    keyHtml.classList.remove(CONSTANTS.activeBtn);
  }
  removeDoubleKeys(event.key, CONSTANTS.shift, CONSTANTS.keyShiftSelector);
  removeDoubleKeys(event.key, CONSTANTS.ctrl, CONSTANTS.keyCotrolSelector);
  removeDoubleKeys(event.key, CONSTANTS.alt, CONSTANTS.keyAltSelector);
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
