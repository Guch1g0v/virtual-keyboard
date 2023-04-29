import keyDown from './events-physical/keydown';
import keyUp from './events-physical/keyup';
import blurKeyboard from './events-physical/blur-keyboard';

function events(state) {
  window.addEventListener('blur', blurKeyboard);
  window.addEventListener('keydown', { handleEvent: keyDown, state });
  window.addEventListener('keyup', { handleEvent: keyUp, state });
}

export default events;
