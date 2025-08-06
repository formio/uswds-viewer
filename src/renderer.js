import { Formio } from '@formio/js';
import Flatpickr from 'flatpickr';
window.flatpickr = window['flatpickr-css'] = Flatpickr;
import USWDS from '@formio/uswds';
import VPAT from '@formio/vpat';
import Premium from '@formio/premium';
USWDS.version = __VERSION__;
Formio.USWDS = USWDS;

// Use modules.
Formio.use([USWDS, VPAT, Premium]);
Formio.Templates.framework = 'uswds';
