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
  console.error('attachBehaviorDecorator in your apps/storybook/preview.js is deprecated.');
  console.error(
    'Please replace your preview.js with https://github.com/wingsuit-designsystem/wingsuit/blob/master/starter-kits/tailwind/apps/storybook/preview.js.'
  );

  return storyFn();
}

export function attachBehaviors(context: any, settings: {}) {
  BehaviorExecutor.attachBehaviors(context, settings);
}

class BehaviorExecutor {
  public behaviors: {} = {};

  public static throwError(error) {
    setTimeout(() => {
      throw error;
    }, 0);
  }

  public static attachBehaviors(context: any, settings = {}) {
    if (beahviorsInitialized === false) {
      console.error(
        "attachBehavior is not initialized. Call initJsBehaviors('Drupal'); in your preview.js."
      );
      return;
    }
    // @ts-ignore
    const { behaviors } = window[behaviorName];
    Object.keys(behaviors).forEach(i => {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          BehaviorExecutor.throwError(e);
        }
      }
    });
  }
}
