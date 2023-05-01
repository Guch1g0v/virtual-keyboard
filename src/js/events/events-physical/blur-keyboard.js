import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function blurKeyboard() {
  this.state.shift = false;
  this.state.ctrl = false;
  this.state.alt = false;
  UTILS.changeByState(this.state);
  const activeBtns = document.querySelectorAll(`.${CONSTANTS.activeBtn}`);
  activeBtns.forEach((btn) => {
    if (btn.id !== CONSTANTS.capslock) {
      btn.classList.remove(CONSTANTS.activeBtn);
    }
  });
}
export default blurKeyboard;
