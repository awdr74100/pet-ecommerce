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
];

library.add(...icons);
