import { ComponentType } from "@angular/cdk/portal";

export const LANDING_PAGE_LAYOUT_CONFIGURATION: {
  createComponent;
  component: ComponentType<any>;
  inputs: any;
}[] = [
  {
    createComponent: () =>
      import("../app/components/app-madlanding/left/left.component").then(
        (it) => it.LeftComponent
      ),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
  {
    createComponent: () =>
      import("../app/components/app-madlanding/right/right.component").then(
        (it) => it.RightComponent
      ),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
  {
    createComponent: () =>
      import("../app/components/app-madlanding/bottom/bottom.component").then(
        (it) => it.BottomComponent
      ),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/version2/left/left.component"
      ).then((it) => it.V2LeftComponent),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/version2/right/right.component"
      ).then((it) => it.V2RightComponent),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
  {
    createComponent: () =>
      import(
        "../app/components/app-landing-pages/version2/bottom/bottom.component"
      ).then((it) => it.V2BottomComponent),
    component: null,
    inputs: {
      image: "somepath",
      title: "some title",
      slogan: "some slogan",
    },
  },
];
