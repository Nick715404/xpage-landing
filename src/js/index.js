import { mobileMenuSwitcher } from './modules/mobile-menu.js';
import { photoSwitcher } from './modules/photo-changer.js';
import { hidingHeader } from './modules/fixed-header.js';

document.addEventListener('DOMContentLoaded', () => {
	mobileMenuSwitcher();
	photoSwitcher();
	hidingHeader();
});
