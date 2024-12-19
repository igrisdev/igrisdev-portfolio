import type { GithubResultAPI } from '@types/GithubResultAPI';

import { atom } from 'nanostores';

export const isOpen = atom(false);

export const cacheRepositories = atom<GithubResultAPI[]>([]);
export const repositories = atom<GithubResultAPI[]>([]);