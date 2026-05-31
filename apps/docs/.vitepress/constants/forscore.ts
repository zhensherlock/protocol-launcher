import type { ForScoreActionPayload, ForScoreOpenPayload, ForScoreServicePayload } from 'protocol-launcher/forscore';

export const openScoreParams: ForScoreOpenPayload = {
  path: 'My Score.pdf',
};

export const openSetlistParams: ForScoreOpenPayload = {
  setlist: 'My Setlist',
  score: 'My Score',
  bookmark: 'My Bookmark',
  page: 3,
};

export const serviceDropboxParams: ForScoreServicePayload = {
  type: 'dropbox',
};

export const actionNextItemParams: ForScoreActionPayload = {
  type: 'nextitem',
};
