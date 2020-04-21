"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("@wingsuit-designsystem/pattern");
const html_1 = require("@storybook/html");
const addon_knobs_1 = require("@storybook/addon-knobs");
function tellStories(patternId, module, callback) {
    const pattern = pattern_1.storage.loadPattern(patternId);
    const story = html_1.storiesOf(pattern.label, module);
    story.addDecorator(addon_knobs_1.withKnobs);
    Object.keys(pattern.patternVariants).forEach((key) => {
        const variant = pattern.patternVariants[key];
        const variables = variant.getVariables();
        story.add(variant.label, () => {
            const knobsVariables = [];
            Object.keys(variant.settings).forEach((key) => {
                knobsVariables[key] = addon_knobs_1.text(key, variant.settings[key].preview);
            });
            const mergedSettingValues = Object.assign(variables, knobsVariables);
            return callback(mergedSettingValues, variant);
        });
    });
    return story;
}
exports.tellStories = tellStories;
//# sourceMappingURL=index.js.map