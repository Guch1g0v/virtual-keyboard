import { UTILS } from '../utils/utils';
import createKey from './create-key';

function createAllKeys(keysButtons) {
  const keysWrap = UTILS.createElement('div', 'keys-wrap');
  const keys = Object.keys(keysButtons);
  keys.forEach((element) => {
    const key = createKey(keysButtons[element], element);
    keysWrap.append(key);
  });
  return keysWrap;
}

export default createAllKeys;
