function blurKeyboard() {
  const activeBtns = document.querySelectorAll('.active-btn');
  activeBtns.forEach((btn) => {
    if (btn.id !== 'CapsLock') {
      btn.classList.remove('active-btn');
    }
  });
}
export default blurKeyboard;
