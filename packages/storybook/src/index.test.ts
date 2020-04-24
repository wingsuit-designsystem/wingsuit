import {getStories} from "./index";
import * as path from "path";

var _global = require("global");
_global.window.STORYBOOK_ENV = 'svelte';

describe('Storybook', () => {
    beforeEach(function () {

    });
    test('Get stories of a pattern', () => {
        const story = getStories("card", "", "module");
    });

});