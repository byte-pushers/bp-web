import { ComponentType } from '@angular/cdk/portal';

export const LANDING_PAGE_LAYOUT_CONFIGURATION_MAP: Map<
  string, { createComponent: Function ; component?: ComponentType<any>; inputs?: any }> = new Map();

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("default",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
        ).then((it) => it.LandingPageBottomLayoutComponent),
    inputs: undefined
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("left",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
      ).then((it) => it.LandingPageLeftLayoutComponent),
    inputs: undefined
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("right",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
      ).then((it) => it.LandingPageRightLayoutComponent),
    inputs: undefined
  }
);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("bottom",
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
      ).then((it) => it.LandingPageBottomLayoutComponent),
    inputs: undefined
  }
);
