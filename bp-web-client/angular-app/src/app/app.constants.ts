import {ComponentType} from "@angular/cdk/portal";

export const LANDING_PAGE_LAYOUT_CONFIGURATION_MAP: Map<string, {createComponent, component: ComponentType<any>, inputs: any}[]> = new Map();

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set('default', [
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component').then(it => it.LandingPageLeftLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow’s problems bit by bit.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component').then(it => it.LandingPageRightLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow’s problems bit by bit.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component').then(it => it.LandingPageBottomLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: null,
      slogan: 'Creating solutions to solve today\'s and tomorrow’s problems bit by bit.'
    }
  }
]);

LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.set('1', [
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/left/landing-page-left-layout.component').then(it => it.LandingPageLeftLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/right/landing-page-right-layout.component').then(it => it.LandingPageRightLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component').then(it => it.LandingPageBottomLayoutComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  }
]);
export const LANDING_PAGE_LAYOUT_CONFIGURATION: {createComponent, component: ComponentType<any>, inputs: any}[] = [
  {
    createComponent: ()=> import('../app/components/app-madlanding/left/left.component').then(it => it.LeftComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-madlanding/right/right.component').then(it => it.RightComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  },
  {
    createComponent: ()=> import('../app/components/app-madlanding/bottom/bottom.component').then(it => it.BottomComponent),
    component: null,
    inputs: {
      image: 'somepath',
      title: 'Mobile App Development Made Simple.',
      slogan: 'Mobile App development can be complex, but with Byte Pushers, it doesn\'t have to be. We\'ll closely work with you to understand your business goals and create a mobile app that aligns with your vision and budget.'
    }
  }
];
