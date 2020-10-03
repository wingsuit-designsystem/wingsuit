/*
@deprecated
Use behaviors instead.
 */
import React from 'react';
import { useEffect } from '@storybook/client-api';

interface DrupalWindow extends Window {
  Drupal: Drupal;
}

declare const window: DrupalWindow;

window.Drupal = { behaviors: {} };

export function drupalAttachBehaviorDecorator(storyFn) {
  return (
    <div>
      {storyFn()}
      {useEffect(() => Drupal.attachBehaviors({}, {}), [])}
    </div>
  );
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
