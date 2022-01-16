import './index';

const patternDefinition = require('./placeholder.wingsuit.yml');

function generateImageStyles() {
  const step = 200;
  const start = 200;
  const end = 2500;
  const imageConfig = {};
  const aspectRatios = {
    '1_1': { w: 1, h: 1 },
    '4_3': { w: 4, h: 3 },
    '8_7': { w: 8, h: 7 },
    '1_3': { w: 1, h: 3 },
    '16_9': { w: 16, h: 9 },
    '21_6': { w: 21, h: 6 },
  };

  Object.keys(aspectRatios).forEach((key) => {
    let current = start;
    while (current < end) {
      imageConfig[`responsive_${key}_${current}w`] = {
        label: `${key.replace('_', 'x')}: ${current}`,
        width: current,
        height: Math.floor((aspectRatios[key].h / aspectRatios[key].w) * current),
      };
      current += step;
    }
  });

  return imageConfig;
}

const styles = generateImageStyles();
patternDefinition.placeholder.configuration.image_config.styles = styles;
const options = {};
Object.keys(styles).forEach((key) => {
  options[key] = styles[key].label;
});
Object.assign(patternDefinition.placeholder.settings.style.options, options);
export const wingsuit = {
  patternDefinition,
};
