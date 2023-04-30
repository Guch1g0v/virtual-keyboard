import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function makeNoColorBtn(event) {
  const keyHtml = document.querySelector(`#${event.code}`);
  if (keyHtml && event.code !== CONSTANTS.capslock) {
    keyHtml.classList.remove(CONSTANTS.activeBtn);
    if (event.key === CONSTANTS.shift) {
      const shifts = document.querySelectorAll(CONSTANTS.keyShiftSelector);
      shifts.forEach((shift) => {
        shift.classList.remove(CONSTANTS.activeBtn);
      });
    }
  }
}

function keyUp(event) {
  if (!event.code) return;
  const textArea = document.querySelector(CONSTANTS.textAreaId);
  if (event.key === CONSTANTS.shift) {
    this.state.shift = false;
    UTILS.changeByState(this.state);
  }
  textArea.focus();
  makeNoColorBtn(event, this.state);
}

export default keyUp;
