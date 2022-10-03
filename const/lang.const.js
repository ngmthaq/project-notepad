import * as ImageConstant from "src/theme/images";

// Locales
export const VIETNAM_LOCALE = "vi";
export const ENGLISH_LOCALE = "en";

// Array

// Label
export const L_USERNAME = "L_USERNAME";
export const L_PASSWORD = "L_PASSWORD";
export const L_REMEMBER = "L_REMEMBER";
export const L_EMAIL = "L_EMAIL";

// Object
export const OBJ_VALIDATION_MSG = "OBJ_VALIDATION_MSG";

// Placeholder

// Text
export const TXT_ERROR = "TXT_ERROR";
export const TXT_BACK = "TXT_BACK";
export const TXT_LOGIN = "TXT_LOGIN";
export const TXT_LOGIN_TITLE = "TXT_LOGIN_TITLE";
export const TXT_SMALL_SCREEN_WARNING = "TXT_SMALL_SCREEN_WARNING";
export const TXT_VIETNAMESE = "TXT_VIETNAMESE";
export const TXT_ENGLISH = "TXT_ENGLISH";
export const TXT_SEARCH = "TXT_SEARCH";
export const TXT_EMPTY_NOTE = "TXT_EMPTY_NOTE";
export const TXT_ADD_NEW = "TXT_ADD_NEW";

// Language configs
export const LOCALE_OPTIONS = [
  {
    key: ENGLISH_LOCALE,
    Icon: ImageConstant.UKFlagIcon,
    label: TXT_ENGLISH,
  },
  {
    key: VIETNAM_LOCALE,
    Icon: ImageConstant.VietNamFlagIcon,
    label: TXT_VIETNAMESE,
  },
];

export const DEFAULT_LOCALE = VIETNAM_LOCALE;
