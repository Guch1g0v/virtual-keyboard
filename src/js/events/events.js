import blurKeyboard from './events-physical/blur-keyboard';
import keyDown from './events-physical/keydown';
import keyUp from './events-physical/keyup';
import keyboardClick from './events-virtual/keyboard-click';

function events(state) {
  document
    .querySelector('.keyboard')
    .addEventListener('click', { handleEvent: keyboardClick, state });
  window.addEventListener('blur', { handleEvent: blurKeyboard, state });
  window.addEventListener('keydown', { handleEvent: keyDown, state });
  window.addEventListener('keyup', { handleEvent: keyUp, state });
}

export default events;
