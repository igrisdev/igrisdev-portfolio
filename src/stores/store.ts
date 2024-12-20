import type { GithubResultAPI } from '@types/GithubResultAPI';

import { atom } from 'nanostores';

export const isOpen = atom(false);

export const cacheRepositoriesStore = atom<GithubResultAPI[]>([]);
export const repositoriesStore = atom<GithubResultAPI[]>([]);