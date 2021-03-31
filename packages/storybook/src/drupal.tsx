/*
@deprecated
Use behaviors instead.
 */

interface DrupalWindow extends Window {
  Drupal: Drupal;
}

declare const window: DrupalWindow;

window.Drupal = { behaviors: {} };

export function drupalAttachBehaviorDecorator(storyFn) {
  console.error('attachBehaviorDecorator in your apps/storybook/preview.js is deprecated.');
  console.error(
    'Please replace your preview.js with https://github.com/wingsuit-designsystem/wingsuit/blob/master/starter-kits/tailwind/apps/storybook/preview.js.'
  );

  return storyFn();
}

class Drupal {
  public behaviors: {} = {};

  public static throwError(error) {
    setTimeout(() => {
      throw error;
    }, 0);
  }

  public static attachBehaviors(context = {}, settings = {}) {
    const { behaviors } = window.Drupal;

    window.setTimeout(() => {
      Object.keys(behaviors).forEach((i) => {
        if (typeof behaviors[i].attach === 'function') {
          try {
            behaviors[i].attach(context, settings);
          } catch (e) {
            Drupal.throwError(e);
          }
        }
      });
    }, 300);
  }
}
