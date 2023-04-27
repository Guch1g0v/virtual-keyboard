import keyboardButtons from './keyboardButtons';
import { UTILS } from './utils';
import createAllKeys from './createAllKeys';

function createKeybord() {
  const keybord = UTILS.createElement('div', 'keyboard');
  const keysWrap = createAllKeys(keyboardButtons);
  keybord.append(keysWrap);
  document.body.append(keybord);
}

createKeybord();
