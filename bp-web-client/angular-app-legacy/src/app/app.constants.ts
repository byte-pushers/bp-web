import { ComponentType } from "@angular/cdk/portal";
import landingPages from "./landing-pages.json";

export const LANDING_PAGE_LAYOUT_CONFIGURATION_MAP: Map<
  string,
  { createComponent; component: ComponentType<any>; inputs: any }[]
> = new Map();

for (let landingPage of landingPages) {
  LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set(landingPage.id.toString(), [
    {
      createComponent: () =>
        import(
          "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
        ).then((it) => it.LandingPageLeftLayoutComponent),
      component: null,
      inputs: landingPage.inputDetails,
    },
    {
      createComponent: () =>
        import(
          "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
        ).then((it) => it.LandingPageRightLayoutComponent),
      component: null,
      inputs: landingPage.inputDetails,
    },
    {
      createComponent: () =>
        import(
          "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
        ).then((it) => it.LandingPageBottomLayoutComponent),
      component: null,
      inputs: landingPage.inputDetails,
    },
    {
      createComponent: () =>
        import(
          "../app/components/app-landing-pages/layouts/mobile/mobile.component"
        ).then((it) => it.MobileComponent),
      component: null,
      inputs: landingPage.inputDetails,
    },
  ]);
}
