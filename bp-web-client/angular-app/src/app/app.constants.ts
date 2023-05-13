import { ComponentType } from "@angular/cdk/portal";

export const LANDING_PAGE_LAYOUT_CONFIGURATION_MAP: Map<
  string,
  { createComponent; component: ComponentType<any>; inputs: any }[]
> = new Map();
let actionItem1Inputs = {
  image: "somepath",
  title: "Mobile App Development Made Simple.",
  slogan:
    "Mobile App development can be complex, but with Byte Pushers, it doesn't have to be. We'll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.",
  theme: {
    primaryColor: "#fff",
    secondaryColor: "#fff",
    imagePath: {
      right: "assets/images/landingPages/v1/vector/right-align.png",
      left: "assets/images/landingPages/v1/vector/left-align.png",
      bottom: "assets/images/landingPages/v1/vector/bottom-align.png",
    },
  },
};

let actionItem2Inputs = {
  image: "somepath",
  title: "Innovative Mobile Solutions, Crafted By Byte Pushers.",
  slogan:
    "Byte Pushers builds mobile apps designed to engage your users and drive your business forward. We use the latestmobile technologies and industry best practices to ensure that your app is intuitive, user-friendly and scalable.",
  theme: {
    primaryColor: "#0263bb",
    secondaryColor: "#000",
    imagePath: {
      right: "assets/images/landingPages/v2/vector/right-align.png",
      left: "assets/images/landingPages/v2/vector/left-align.png",
      bottom: "assets/images/landingPages/v2/vector/bottom-align.png",
    },
  },
};
LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("default", [
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
      ).then((it) => it.LandingPageBottomLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow\'s problems <strong>bit</strong> by <strong>bit</strong>.'
    },
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
      ).then((it) => it.LandingPageRightLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow\'s problems <strong>bit</strong> by <strong>bit</strong>.'
    },
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
      ).then((it) => it.LandingPageLeftLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow\'s problems <strong>bit</strong> by <strong>bit</strong>.'
    },
  }
]);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("1", [
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
      ).then((it) => it.LandingPageLeftLayoutComponent),
    component: null,
    inputs: actionItem1Inputs,
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
      ).then((it) => it.LandingPageRightLayoutComponent),
    component: null,
    inputs: actionItem1Inputs,
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
      ).then((it) => it.LandingPageBottomLayoutComponent),
    component: null,
    inputs: actionItem1Inputs,
  },
]);
LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set("2", [
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component"
      ).then((it) => it.LandingPageLeftLayoutComponent),
    component: null,
    inputs: actionItem2Inputs,
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component"
      ).then((it) => it.LandingPageRightLayoutComponent),
    component: null,
    inputs: actionItem2Inputs,
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component"
      ).then((it) => it.LandingPageBottomLayoutComponent),
    component: null,
    inputs: actionItem2Inputs,
  },
]);

// commented this as we are no longer need this
// export const LANDING_PAGE_LAYOUT_CONFIGURATION: {
//   createComponent;
//   component: ComponentType<any>;
//   inputs: any;
// }[] = [
//   {
//     createComponent: () =>
//       import("../app/components/app-madlanding/left/left.component").then(
//         (it) => it.LeftComponent
//       ),
//     component: null,
//     inputs: {
//       image: "somepath",
//       title: "Mobile App Development Made Simple.",
//       slogan:
//         "Mobile App development can be complex, but with Byte Pushers, it doesn't have to be. We'll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.",
//     },
//   },
//   {
//     createComponent: () =>
//       import("../app/components/app-madlanding/right/right.component").then(
//         (it) => it.RightComponent
//       ),
//     component: null,
//     inputs: {
//       image: "somepath",
//       title: "Mobile App Development Made Simple.",
//       slogan:
//         "Mobile App development can be complex, but with Byte Pushers, it doesn't have to be. We'll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.",
//     },
//   },
//   {
//     createComponent: () =>
//       import("../app/components/app-madlanding/bottom/bottom.component").then(
//         (it) => it.BottomComponent
//       ),
//     component: null,
//     inputs: {
//       image: "somepath",
//       title: "Mobile App Development Made Simple.",
//       slogan:
//         "Mobile App development can be complex, but with Byte Pushers, it doesn't have to be. We'll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.",
//     },
//   },
// ];
