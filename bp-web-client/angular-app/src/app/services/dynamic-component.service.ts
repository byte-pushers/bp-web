import { Injectable, ViewContainerRef } from '@angular/core';
import { LANDING_PAGE_LAYOUT_CONFIGURATION_MAP } from '@app/app.constants';
import { ComponentType } from '@angular/cdk/portal';
// import landingPageConfig from '@assets/data/landing-pages.json';
import * as landingPageConfig from '@assets/data/landing-pages.json'

@Injectable({ providedIn: "root" })
export class DynamicComponentService {
  public constructor() { }

  public createComponent(
    container: ViewContainerRef,
    landingPageLayoutId?: string,
    landingPageLayoutType?: string
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      container.clear();
      const landingPageLayoutConfig = await this.randomlySelectLandingPageLayoutConfiguration(
        landingPageLayoutType
      );
      const componentRef = container?.createComponent(
        await landingPageLayoutConfig?.createComponent()
      );
      const targetLandingPageConfigDefault = landingPageConfig.find((config) => (config.id === 'default'));
      let targetLandingPageConfig = landingPageConfig.find((config) => (config.id === landingPageLayoutId));

      if (targetLandingPageConfig == null) targetLandingPageConfig = targetLandingPageConfigDefault;

      if (landingPageLayoutConfig != null) {
        landingPageLayoutConfig.inputs = targetLandingPageConfig?.inputDetails;

        Object.entries(landingPageLayoutConfig?.inputs).forEach(
          ([key, value]) => {
            componentRef?.setInput(key, value);
          }
        );
      }

      resolve(true);
    });
  }

  private async randomlySelectLandingPageLayoutConfiguration(landingPageLayoutType?: string):
    Promise<void | { createComponent: Function, component?: ComponentType<any>, inputs?: any }> {
    let landingPageLayoutConfiguration = LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get('default');

    if (landingPageLayoutType == null) {
      const landingPageLayoutConfigKeys = Array.from(LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.keys());
      const landingPageLayoutConfigKey = landingPageLayoutConfigKeys[Math.floor(Math.random() * landingPageLayoutConfigKeys.length)];
      landingPageLayoutConfiguration = LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(landingPageLayoutConfigKey);
    } else {
      landingPageLayoutConfiguration = LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(landingPageLayoutType);
    }

    return landingPageLayoutConfiguration ? landingPageLayoutConfiguration : LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get('default');
  }
}
