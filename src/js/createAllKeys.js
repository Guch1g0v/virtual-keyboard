import { UTILS } from './utils';
import createKey from './createKey';

function createAllKeys(keysButtons) {
  const keysWrap = UTILS.createElement('div');
  const keys = Object.keys(keysButtons);
  keys.forEach((element) => {
    const id = element.slice(2);
    const key = createKey(keysButtons[element], id);
    keysWrap.append(key);
  });
  keysWrap.classList.add('keys-wrap');
  return keysWrap;
}

export default createAllKeys;
