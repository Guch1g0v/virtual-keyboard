import { UTILS } from '../utils/utils';

let mainLang = localStorage.getItem('mainLang');
let addLang = localStorage.getItem('addLang');
if (!mainLang || !addLang) {
  mainLang = 'en';
  addLang = 'ru';
}

const keyboardState = new UTILS.State(mainLang, addLang);

export default keyboardState;
