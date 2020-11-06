import React from 'react';
import { useEffect } from '@storybook/client-api';

declare const window: Window;

let behaviorName;
let beahviorsInitialized = false;
export function isInit() {
  return beahviorsInitialized;
}
export function init(pbehaviorName) {
  if (beahviorsInitialized === false) {
    // @ts-ignore
    window[pbehaviorName] = { behaviors: {} };
    behaviorName = pbehaviorName;
  }
  beahviorsInitialized = true;
}

export function attachBehaviorDecorator(storyFn) {
  return (
    <div>
      {storyFn()}
      {useEffect(() => BehaviorExecutor.attachBehaviors({}, {}), [])}
    </div>
  );
}

class BehaviorExecutor {
  public behaviors: {} = {};

  public static throwError(error) {
    setTimeout(() => {
      throw error;
    }, 0);
  }

  public static attachBehaviors(context = {}, settings = {}) {
    // @ts-ignore
    const { behaviors } = window[behaviorName];
    window.setTimeout(() => {
      Object.keys(behaviors).forEach((i) => {
        if (typeof behaviors[i].attach === 'function') {
          try {
            behaviors[i].attach(context, settings);
          } catch (e) {
            BehaviorExecutor.throwError(e);
          }
        }
      });
    }, 300);
  }
}
