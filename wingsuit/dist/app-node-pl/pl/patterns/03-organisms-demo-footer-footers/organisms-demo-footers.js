/**
 * Demo of footer. Pulls in footer assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'organisms/footer';

// Import demo assets
import twig from './footers.twig';
import yaml from './footers.yml';

export default {
  twig,
  yaml,
};
