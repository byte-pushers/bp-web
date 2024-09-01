/*import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window
});*/
import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if (typeof window != null) {
      return window
    }

    return new Window(); // does this work?
  }
});
