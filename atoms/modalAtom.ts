import { DocumentData } from 'firebase/firestore';
import { Movie } from '../typings';
import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const movieState = atom<Movie | DocumentData | null>({
    key: 'movieState',
    default: null
});