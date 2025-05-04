import { ComponentType } from "@angular/cdk/portal";
import landingPages from "./landing-pages.json";

export const LANDING_PAGE_LAYOUT_CONFIGURATION_MAP: Map<
  string, { createComponent: Function ; component?: ComponentType<any>; inputs?: any }> = new Map();

function findPage(pageId: string, landingPages: any[]): any {
  return landingPages.find(page => {
    if (page != null) {
      if (page.id === pageId) {
        return true;
      }
    }

    return false;
  })
}

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("default",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
        ).then((it) => it.LandingPageBottomLayoutComponent),
    inputs: findPage('default', landingPages)?.inputDetails
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("left",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
      ).then((it) => it.LandingPageLeftLayoutComponent),
    inputs: findPage('left', landingPages)?.inputDetails
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("right",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
      ).then((it) => it.LandingPageRightLayoutComponent),
    inputs: findPage('right', landingPages)?.inputDetails
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("bottom",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
      ).then((it) => it.LandingPageBottomLayoutComponent),
    inputs: findPage('bottom', landingPages)?.inputDetails
  }
);
