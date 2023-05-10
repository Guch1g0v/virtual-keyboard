import createKeybord from './create-keyboard/create-key-board';
import createTextArea from './create-keyboard/create-text-area';
import events from './events/events';
import keyboardState from './state/keyboard-state';
import { keyboardButtons } from './state/keyboardButtons';

function initVirtualKeybord(state) {
  const textArea = createTextArea();
  const keyboard = createKeybord(keyboardButtons);
  document.body.append(textArea);
  document.body.append(keyboard);
  events(state);
}

initVirtualKeybord(keyboardState);
