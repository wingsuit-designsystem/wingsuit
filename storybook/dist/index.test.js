"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
var _global = require("global");
_global.window.STORYBOOK_ENV = 'svelte';
describe('Storybook', () => {
    beforeEach(function () {
    });
    test('Get stories of a pattern', () => {
        const story = index_1.getStories("card", "", "module");
    });
});
//# sourceMappingURL=index.test.js.map