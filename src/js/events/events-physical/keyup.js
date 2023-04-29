function keyUp(event) {
  if (!event.code) {
    return;
  }
  const textArea = document.querySelector('#textarea');
  textArea.focus();
  const keyHtml = document.querySelector(`#${event.code}`);
  if (keyHtml) {
    if (event.code === 'CapsLock') {
      if (!this.state.capslock) {
        keyHtml.classList.remove('active-btn');
      }
    } else {
      keyHtml.classList.remove('active-btn');
    }
    if (event.key === 'Shift') {
      const shifts = document.querySelectorAll('.key_shift');
      if (shifts) {
        shifts.forEach((shift) => {
          shift.classList.remove('active-btn');
        });
      }
    }
  }
}

export default keyUp;
