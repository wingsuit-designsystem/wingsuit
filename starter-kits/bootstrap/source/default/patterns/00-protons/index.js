/**
 * Base css generation and global js logic.
 */

import 'tokens/main.scss';
import jquery from 'jquery';
import 'jquery-once';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

global.jQuery = jquery;
global.$ = jquery;
