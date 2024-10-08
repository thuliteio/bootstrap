'use strict';

// Source: https://github.com/twbs/examples/blob/main/vite/src/js/main.js

// Option A: Include all of Bootstrap
// import 'bootstrap';

// Option B: Include parts of Bootstrap
import { Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
    new Popover(popover);
});
