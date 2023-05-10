function createElement(element, className) {
  const elementHTML = document.createElement(element);
  if (className) elementHTML.className = className;
  return elementHTML;
}

function setLocalStorage(lang1, lang2) {
  localStorage.setItem('mainLang', lang1);
  localStorage.setItem('addLang', lang2);
}

const CONSTANTS = {
  capslock: 'CapsLock',
  activeBtn: 'active-btn',
  textAreaId: '#textarea',
  alt: 'Alt',
  ctrl: 'Control',
  shift: 'Shift',
  tab: 'Tab',
  tabSym: '\t',
  enter: 'Enter',
  enterSym: '\n',
  backspace: 'Backspace',
  delete: 'Delete',
  space: 'Space',
  ru: 'ru',
  en: 'en',
  statusLowCase: 'lowCase',
  statusShift: 'shift',
  statusCaps: 'caps',
  statusShiftCaps: 'shiftCaps',
  hide: 'hide',
  span: 'span',
  keyShiftSelector: '.key_shift',
  keyCotrolSelector: '.key_ctrl',
  keyAltSelector: '.key_alt',
};

function deleteClass(className) {
  const otherLang = document.querySelectorAll(className);
  otherLang.forEach((div) => {
    div.classList.add(CONSTANTS.hide);
  });
}

function changeVisibleChars(className, state) {
  state.setCondition(className);
  const curLang = state.getLang();
  const addLang = state.getAddLang();
  const mainLang = state.getMainLang();
  if (curLang === addLang) {
    deleteClass(`.key__${mainLang}`);
  } else {
    deleteClass(`.key__${addLang}`);
  }
  const languageBtns = document.querySelectorAll(`.key__${curLang}`);
  languageBtns.forEach((div) => {
    div.classList.remove(CONSTANTS.hide);
    const spans = div.querySelectorAll(CONSTANTS.span);
    spans.forEach((span) => {
      if (!span.classList.contains(className)) {
        span.classList.add(CONSTANTS.hide);
      } else {
        span.classList.remove(CONSTANTS.hide);
      }
    });
  });
}

function changeByState(state) {
  if (state.capslock && state.shift) {
    changeVisibleChars(CONSTANTS.statusShiftCaps, state);
  } else if (state.capslock) {
    changeVisibleChars(CONSTANTS.statusCaps, state);
  } else if (state.shift) {
    changeVisibleChars(CONSTANTS.statusShift, state);
  } else {
    changeVisibleChars(CONSTANTS.statusLowCase, state);
  }
}

function removeDoubleKeys(key, button, selector) {
  if (key === button) {
    const keys = document.querySelectorAll(selector);
    keys.forEach((dbKey) => {
      dbKey.classList.remove(CONSTANTS.activeBtn);
    });
  }
}

function removeDoubleByClick(state, selector, stateKey) {
  const doubleKeys = document.querySelectorAll(selector);
  state.changeStateKey(stateKey);
  doubleKeys.forEach((dKey) => {
    if (state[stateKey]) {
      dKey.classList.add(CONSTANTS.activeBtn);
    } else {
      dKey.classList.remove(CONSTANTS.activeBtn);
    }
  });
}

function findChar(button, state) {
  let char;
  if (button.id === CONSTANTS.enter) {
    char = CONSTANTS.enterSym;
  } else if (button.id === CONSTANTS.tab) {
    char = CONSTANTS.tabSym;
  } else {
    const lang = state.getLang();
    const condition = state.getCondition();
    const divVisible = button.querySelector(`.key__${lang}`);
    char = divVisible.querySelector(`.${condition}`).textContent;
  }
  return char;
}

function findCharKeyDown(event, state, keyboardButtons) {
  event.preventDefault();
  let char;
  if (event.key === CONSTANTS.tab) {
    char = CONSTANTS.tabSym;
  } else {
    char = keyboardButtons[event.code][state.getLang()][state.getCondition()];
  }
  return char;
}

function changeLanguage(state) {
  const curLang = state.getLang();
  const addLang = state.getAddLang();
  const mainLang = state.getMainLang();
  if (curLang === addLang) {
    state.setLang(mainLang);
    setLocalStorage(mainLang, addLang);
  } else {
    state.setLang(addLang);
    setLocalStorage(addLang, mainLang);
  }
  removeDoubleByClick(state, CONSTANTS.keyAltSelector, 'alt');
  removeDoubleByClick(state, CONSTANTS.keyCotrolSelector, 'ctrl');
}

class State {
  constructor(mainLang, addLang) {
    this.lang = mainLang;
    this.mainLang = mainLang;
    this.addLang = addLang;
    this.capslock = false;
    this.shift = false;
    this.ctrl = false;
    this.alt = false;
    this.status = CONSTANTS.statusLowCase;
    this.changeStateKey = (stateKey) => {
      this[stateKey] = !this[stateKey];
    };
    this.getLang = () => this.lang;
    this.setLang = (value) => {
      this.lang = value;
    };
    this.getAddLang = () => this.addLang;
    this.getMainLang = () => this.mainLang;
    this.getCondition = () => this.status;
    this.setCondition = (value) => {
      this.status = value;
    };
  }
}

function insertChar(textArea, char) {
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
}

function deleteChar(textArea) {
  textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
}

function printSpace(textArea) {
  textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, 'end');
}

function backspaceChar(textArea) {
  if (textArea.selectionStart) {
    textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
  }
}

function leftUpCursor(textArea) {
  if (textArea.selectionStart) {
    textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd - 1, 'end');
  }
}

function rightDownCursor(textArea) {
  textArea.setRangeText('', textArea.selectionStart + 1, textArea.selectionEnd + 1, 'end');
}

exports.UTILS = {
  CONSTANTS,
  createElement,
  changeByState,
  State,
  insertChar,
  setLocalStorage,
  removeDoubleByClick,
  changeLanguage,
  findChar,
  findCharKeyDown,
  removeDoubleKeys,
  deleteChar,
  printSpace,
  backspaceChar,
  leftUpCursor,
  rightDownCursor,
};
