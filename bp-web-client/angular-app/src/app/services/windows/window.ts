import { InjectionToken } from '@angular/core';
export const WINDOW = new InjectionToken<Window>("Global WindowToken Object", {
  factory: () => (typeof window !== 'undefined' ? window : ({} as Window)),
});
/*export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {

    if (window != null) {
      return window;
    }

    return new Window(); // does this work?
  }
});*/

/*import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window
});*/
