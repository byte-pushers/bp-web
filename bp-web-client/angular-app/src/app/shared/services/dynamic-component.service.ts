import {Injectable, ViewContainerRef} from '@angular/core';
import {LANDING_PAGE_LAYOUT_CONFIGURATION} from '../../app.constants';

@Injectable({providedIn: 'root'})
export class DynamicComponentService {
  public constructor() {
  }

  public createComponent(container: ViewContainerRef): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      container.clear();
      const landingPageLayoutConfig = await this.randomlySelectLandingPageLayoutConfiguration();
      const componentRef = container.createComponent(await landingPageLayoutConfig?.createComponent());

      Object.entries(landingPageLayoutConfig?.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });

      resolve(true);
    });
  }

  private async randomlySelectLandingPageLayoutConfiguration() {
    const landingPageLayoutRandomIndex = Math.floor(Math.random() * (LANDING_PAGE_LAYOUT_CONFIGURATION.length - 0) + 0);

    return LANDING_PAGE_LAYOUT_CONFIGURATION[landingPageLayoutRandomIndex];
  }
}
