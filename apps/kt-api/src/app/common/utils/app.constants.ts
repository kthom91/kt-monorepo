export const APP_GLOBAL_PREFIX = 'v1';
export const CACHE_TTL = 60 * 60 * 24; // 1 day
export const SETLIST_FM_ENDPOINT = 'setlist-fm/user';
export const SETLIST_FM_CACHE_KEY = `/${APP_GLOBAL_PREFIX}/${SETLIST_FM_ENDPOINT}`;
export const SETLIST_FM_URL =
  'https://api.setlist.fm/rest/1.0/user/kentrain/attended';
