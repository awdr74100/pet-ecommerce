import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faLock,
  faUser,
  faArrowLeft,
  faUserCircle,
  faSignOutAlt,
  faAngleRight,
  faUserCog,
  faShoppingBag,
  faAngleDown,
  faFileAlt,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
  faUser,
  faArrowLeft,
  faUserCircle,
  faSignOutAlt,
  faAngleRight,
  faUserCog,
  faBell,
  faShoppingBag,
  faAngleDown,
  faFileAlt,
  faReceipt,
];

library.add(...icons);
