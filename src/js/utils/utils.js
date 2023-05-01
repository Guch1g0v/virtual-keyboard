function createElement(element, className) {
  const elementHTML = document.createElement(element);
  if (className) {
    elementHTML.className = className;
  }
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

function changeVisibleChars(className, lang, state) {
  const addLang = state.getAddLang();
  const mainLang = state.getMainLang();
  if (lang === addLang) {
    deleteClass(`.key__${mainLang}`);
  } else {
    deleteClass(`.key__${addLang}`);
  }
  const languageBtns = document.querySelectorAll(`.key__${lang}`);
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
  const lang = state.getLang();
  if (state.capslock && state.shift) {
    state.setCondition(CONSTANTS.statusShiftCaps);
    changeVisibleChars(CONSTANTS.statusShiftCaps, lang, state);
  } else if (state.capslock) {
    state.setCondition(CONSTANTS.statusCaps);
    changeVisibleChars(CONSTANTS.statusCaps, lang, state);
  } else if (state.shift) {
    state.setCondition(CONSTANTS.statusShift);
    changeVisibleChars(CONSTANTS.statusShift, lang, state);
  } else {
    state.setCondition(CONSTANTS.statusLowCase);
    changeVisibleChars(CONSTANTS.statusLowCase, lang, state);
  }
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
    this.getLang = function getLang() {
      return this.lang;
    };
    this.setLang = function setLang(value) {
      this.lang = value;
    };
    this.getAddLang = function getAddLang() {
      return this.addLang;
    };
    this.getMainLang = function getMainLang() {
      return this.mainLang;
    };
    this.getCondition = function getCondition() {
      return this.status;
    };
    this.setCondition = function setCondition(value) {
      this.status = value;
    };
  }
}

function insertChar(textArea, char) {
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
}

exports.UTILS = {
  CONSTANTS, createElement, changeByState, State, insertChar, setLocalStorage,
};
