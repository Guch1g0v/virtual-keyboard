import { UTILS } from '../utils/utils';
import createAllKeys from './create-all-keys';

function createKeybord(keyboardButtons) {
  const keybord = UTILS.createElement('div', 'keyboard');
  const keysWrap = createAllKeys(keyboardButtons);
  keybord.append(keysWrap);
  return keybord;
}

export default createKeybord;
