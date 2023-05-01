import { lettersDigits } from '../../state/keyboardButtons';
import { UTILS } from '../../utils/utils';

export function removeDoubleByClick(state, selector, stateKey) {
  const doubleKeys = document.querySelectorAll(selector);
  state[stateKey] = !state[stateKey];
  doubleKeys.forEach((dKey) => {
    if (state[stateKey]) {
      dKey.classList.add(UTILS.CONSTANTS.activeBtn);
    } else {
      dKey.classList.remove(UTILS.CONSTANTS.activeBtn);
    }
  });
}

function keyboardClick(event) {
  const textArea = document.querySelector(UTILS.CONSTANTS.textAreaId);
  textArea.focus();
  const button = event.target.closest('BUTTON');
  if (!button) return;
  if (lettersDigits.includes(button.id) || button.id === UTILS.CONSTANTS.tab
  || button.id === UTILS.CONSTANTS.enter) {
    let char;
    if (button.id === UTILS.CONSTANTS.enter) {
      char = UTILS.CONSTANTS.enterSym;
    } else if (button.id === UTILS.CONSTANTS.tab) {
      char = UTILS.CONSTANTS.tabSym;
    } else {
      const lang = this.state.getLang();
      const condition = this.state.getCondition();
      const divVisible = button.querySelector(`.key__${lang}`);
      char = divVisible.querySelector(`.${condition}`).textContent;
    }
    UTILS.insertChar(textArea, char);
    textArea.focus();
  }
  if (button.id === UTILS.CONSTANTS.capslock) {
    const custom = new KeyboardEvent('keydown', { code: 'CapsLock', key: 'CapsLock' });
    dispatchEvent(custom);
  }
  if (button.id === UTILS.CONSTANTS.backspace) {
    if (textArea.selectionStart) {
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
    }
  }
  if (button.id === UTILS.CONSTANTS.delete) {
    textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
  }

  if (button.id === 'Space') {
    textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (textArea.selectionStart) {
    if (button.id === 'ArrowLeft') {
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd - 1, 'end');
    }
  }

  if (button.id === 'ArrowRight') {
    textArea.setRangeText('', textArea.selectionStart + 1, textArea.selectionEnd + 1, 'end');
  }

  if (button.id === 'ArrowUp' || button.id === 'ArrowDown') {
    textArea.setRangeText(button.textContent, textArea.selectionStart, textArea.selectionEnd, 'end');
  }

  if (button.id === 'ShiftRight' || button.id === 'ShiftLeft') {
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyShiftSelector, 'shift');
    UTILS.changeByState(this.state);
  }

  if (button.id === 'ControlLeft' || button.id === 'ControlRight') {
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyCotrolSelector, 'ctrl');
  }

  if (button.id === 'AltLeft' || button.id === 'AltRight') {
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyAltSelector, 'alt');
  }
  if ((button.id === 'AltLeft' || button.id === 'AltRight')
  && this.state.ctrl) {
    if (this.state.getLang() === this.state.addLang) {
      this.state.setLang(this.state.mainLang);
    } else this.state.setLang(this.state.addLang);
    UTILS.changeByState(this.state);
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyAltSelector, 'alt');
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyCotrolSelector, 'ctrl');
  }
  if ((button.id === 'ControlLeft' || button.id === 'ControlRight')
  && this.state.alt) {
    if (this.state.getLang() === this.state.addLang) {
      this.state.setLang(this.state.mainLang);
    } else this.state.setLang(this.state.addLang);
    UTILS.changeByState(this.state);
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyAltSelector, 'alt');
    removeDoubleByClick(this.state, UTILS.CONSTANTS.keyCotrolSelector, 'ctrl');
  }
  textArea.focus();
}

export default keyboardClick;
