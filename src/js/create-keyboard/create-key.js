import keyboardState from '../state/keyboard-state';
import { UTILS } from '../utils/utils';

function createFunctionKey(option) {
  const keyBtn = UTILS.createElement(
    'button',
    `key key_${option.type} key_func`,
  );
  const span = UTILS.createElement('span');
  span.textContent = option.type.charAt(0).toUpperCase() + option.type.slice(1);
  if (option.type === 'space') span.textContent = '';
  if (option.type === 'up') span.textContent = '▲';
  if (option.type === 'down') span.textContent = '▼';
  if (option.type === 'left') span.textContent = '◄';
  if (option.type === 'right') span.textContent = '►';
  keyBtn.append(span);
  return keyBtn;
}

function createSpan(lang, option, selector) {
  const span = UTILS.createElement('span', selector);
  span.textContent = option[lang][selector];
  if (selector !== UTILS.CONSTANTS.statusLowCase) {
    span.classList.add('hide');
  }
  return span;
}

function createLangType(lang, option) {
  const div = UTILS.createElement('div', `key__${lang}`);
  if (keyboardState.getLang() !== lang) {
    div.classList.add('hide');
  }
  div.append(createSpan(lang, option, UTILS.CONSTANTS.statusLowCase));
  div.append(createSpan(lang, option, UTILS.CONSTANTS.statusShift));
  div.append(createSpan(lang, option, UTILS.CONSTANTS.statusCaps));
  div.append(createSpan(lang, option, UTILS.CONSTANTS.statusShiftCaps));
  return div;
}

function createRegularKey(option) {
  const keyBtn = UTILS.createElement('button', 'key');
  keyBtn.append(createLangType(UTILS.CONSTANTS.en, option));
  keyBtn.append(createLangType(UTILS.CONSTANTS.ru, option));
  return keyBtn;
}

function createKey(option, id) {
  let keyBtn;
  if (option.type !== 'key') {
    keyBtn = createFunctionKey(option);
  } else {
    keyBtn = createRegularKey(option);
  }
  keyBtn.setAttribute('id', id);
  return keyBtn;
}

export default createKey;
