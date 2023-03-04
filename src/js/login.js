import {loadHeaderFooter} from './utils.mjs';
import Admin from './admin.mjs';

loadHeaderFooter();
const newAdmin = new Admin('main');
newAdmin.showLoging();
