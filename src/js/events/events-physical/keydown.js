import { letters } from '../../state/keyboardButtons';

function makeColorKey(code) {
  if (!code) {
    return;
  }
  const keyHtml = document.querySelector(`#${code}`);
  if (keyHtml) {
    keyHtml.classList.add('active-btn');
  }
}

function keyDown(event) {
  const textArea = document.querySelector('#textarea');
  textArea.focus();
  if (event.key === 'CapsLock') {
    this.state.capslock = !this.state.capslock;
  }
  if (letters.includes(event.code) && !event.ctrlKey) {
    event.preventDefault();
    let char = event.key.toLowerCase();
    if (this.state.capslock && !event.shiftKey) {
      char = char.toUpperCase();
    }
    if (!this.state.capslock && event.shiftKey) {
      char = char.toUpperCase();
    }
    if (event.key === 'Tab') char = '\t';
    textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (event.key === 'Alt') event.preventDefault();
  makeColorKey(event.code, this.state);
  textArea.focus();
}

export default keyDown;
