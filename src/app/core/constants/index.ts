export const APP_CONFIG = {
  APP_NAME: 'Angular Clean Setup',
  DEFAULT_PAGE_SIZE: 10,
  DATE_FORMAT: 'yyyy-MM-dd',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME: 'app_theme',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USERS: '/users',
} as const;
