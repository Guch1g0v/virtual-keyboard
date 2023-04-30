function createElement(element, className) {
  const elementHTML = document.createElement(element);
  if (className) {
    elementHTML.className = className;
  }
  return elementHTML;
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
  ru: 'ru',
  en: 'en',
  statusLowCase: 'lowCase',
  statusShift: 'shift',
  statusCaps: 'caps',
  statusShiftCaps: 'shiftCaps',
  hide: 'hide',
  span: 'span',
  keyMainLangSelector: '.key__en',
  keyAddLangSelector: '.key__ru',
  keyShiftSelector: '.key_shift',
};

function deleteClass(className) {
  const otherLang = document.querySelectorAll(className);
  otherLang.forEach((div) => {
    div.classList.add(CONSTANTS.hide);
  });
}

function changeVisibleChars(className, lang) {
  if (lang === CONSTANTS.ru) {
    deleteClass(CONSTANTS.keyMainLangSelector);
  } else {
    deleteClass(CONSTANTS.keyAddLangSelector);
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
    changeVisibleChars(CONSTANTS.statusShiftCaps, lang);
  } else if (state.capslock) {
    state.setCondition(CONSTANTS.statusCaps);
    changeVisibleChars(CONSTANTS.statusCaps, lang);
  } else if (state.shift) {
    state.setCondition(CONSTANTS.statusShift);
    changeVisibleChars(CONSTANTS.statusShift, lang);
  } else {
    state.setCondition(CONSTANTS.statusLowCase);
    changeVisibleChars(CONSTANTS.statusLowCase, lang);
  }
}

class State {
  constructor() {
    this.lang = CONSTANTS.en;
    this.mainLang = CONSTANTS.en;
    this.addLang = CONSTANTS.ru;
    this.capslock = false;
    this.shift = false;
    this.status = CONSTANTS.statusLowCase;
    this.getLang = function getLang() {
      return this.lang;
    };
    this.setLang = function setLang(value) {
      this.lang = value;
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
  CONSTANTS, createElement, changeByState, State, insertChar,
};
