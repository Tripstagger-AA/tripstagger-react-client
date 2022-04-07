declare module 'velocity-react' {
  import React from 'react';

  export interface VelocityComponentProperties extends jquery.velocity.Options {
    animation?: jquery.velocity.Properties | string;
    runOnMount?: boolean;
    targetQuerySelector?: string;
    interruptBehavior?: string;
    enterShowStyle?: jquery.velocity.Options;
  }

  export class VelocityComponent extends React.Component<VelocityComponentProperties> {
    runAnimation(config: {stop?: boolean; finish?: boolean}): void;
  }

  export interface VelocityAnimationObject extends jquery.velocity.Options {
    animation: jquery.velocity.Properties | string;
    styles?: jquery.velocity.Properties;
    opts?: jquery.velocity.Options;
  }

  export interface VelocityTransitionGroupProperties {
    enter?: VelocityAnimationObject | string;
    leave?: VelocityAnimationObject | string;
    component?: string;
    runOnMount?: boolean;
    enterHideStyle?: jquery.velocity.Options;
    enterShowStyle?: jquery.velocity.Options;
  }

  export class VelocityTransitionGroup extends React.Component<VelocityTransitionGroupProperties> {}

  export function registerEffect(animation: jquery.velocity.RegisteredEffectOptions): string;

  export function registerEffect(
    suffix: string,
    animation: jquery.velocity.RegisteredEffectOptions,
  ): string;
}