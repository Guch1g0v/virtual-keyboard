import { UTILS } from '../../utils/utils';

const { CONSTANTS } = UTILS;

function blurKeyboard() {
  const activeBtns = document.querySelectorAll(CONSTANTS.activeBtn);
  activeBtns.forEach((btn) => {
    if (btn.id !== CONSTANTS.capslock) {
      btn.classList.remove(CONSTANTS.activeBtn);
    }
  });
}
export default blurKeyboard;
