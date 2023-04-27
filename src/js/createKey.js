import { UTILS } from './utils';

function createFunctionKey(option) {
  const keyBtn = UTILS.createElement('button', `key key_${option.type} key_func`);
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

function createRegularKey(option) {
  const keyBtn = UTILS.createElement('button', option.type);
  function createKeyText(lang) {
    const span = UTILS.createElement('span', `key__${lang}`);
    span.textContent = option[lang].regular;
    if (lang !== 'en') {
      span.classList.add('hide-lang');
    }
    return span;
  }
  keyBtn.append(createKeyText('en'));
  keyBtn.append(createKeyText('ru'));
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
