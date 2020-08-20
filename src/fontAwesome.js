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
  faAngleUp,
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
  faAngleUp,
  faFileAlt,
  faReceipt,
];

library.add(...icons);
