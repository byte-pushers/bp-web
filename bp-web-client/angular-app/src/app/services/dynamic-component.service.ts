import { Injectable, ViewContainerRef } from '@angular/core';
import { LANDING_PAGE_LAYOUT_CONFIGURATION_MAP } from '@app/app.constants';
import { ComponentType } from '@angular/cdk/portal';
// import landingPageConfig from '@assets/data/landing-pages.json';
import landingPageData from '@assets/data/landing-pages.json'

interface LandingPageConfig {
  id: string | number;
  inputDetails: {
    /*contentTitle: string;*/
    heroContent: string | null;
    slogan: string | null;
    theme: {
      mainLogoColor: string | null;
      titleColor: string | null;
      primaryColor: string | null;
      secondaryColor: string | null;
      inputColor: string | null;
      imagePath: {
        right: string | null;
        left: string | null;
        bottom: string | null;
      }
    };
    metaTags: {name: string | null, content: string | null}[]
  }
}
@Injectable({ providedIn: "root" })
export class DynamicComponentService {
  public landingPageConfig: Array<LandingPageConfig> = landingPageData;
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
      const targetLandingPageConfigDefault = this.landingPageConfig.find((config) => (config.id === 'default'));
      let targetLandingPageConfig = this.landingPageConfig.find((config) => (config.id == landingPageLayoutId));

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
