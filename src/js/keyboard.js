import createTextArea from './create-keyboard/create-text-area';
import createKeybord from './create-keyboard/create-key-board';
import { keyboardButtons } from './state/keyboardButtons';
import keyboardState from './state/keyboard-state';
import events from './events/events';

function initVirtualKeybord(state) {
  const textArea = createTextArea();
  const keyboard = createKeybord(keyboardButtons);
  document.body.append(textArea);
  document.body.append(keyboard);
  events(state);
}

initVirtualKeybord(keyboardState);
