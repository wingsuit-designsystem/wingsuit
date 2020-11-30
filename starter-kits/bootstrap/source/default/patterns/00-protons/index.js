/**
 * Base css generation and global js logic.
 */

import 'tokens/main.scss';
import jquery from 'jquery';
import 'jquery-once';

global.jQuery = jquery;
global.$ = jquery;
