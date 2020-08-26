import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEye,
  faEyeSlash,
  faBell,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faLock,
  faUser,
  faUserCircle,
  faSignOutAlt,
  faUserCog,
  faShoppingBag,
  faAngleDown,
  faFileAlt,
  faReceipt,
  faPlus,
  faArrowLeft,
  faAngleRight,
  faAngleLeft,
  faArrowDown,
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
  faEdit,
  faTrashAlt,
  faPlus,
  faAngleLeft,
  faArrowDown,
];

library.add(...icons);
