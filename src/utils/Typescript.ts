import { ChangeEvent, FormEvent } from 'react';
import rootReducer from '../redux/reducers/index';

export interface IBlog {
  _id?: string;
  //user: string | IUser
  user: string;
  title: string;
  content: string;
  description: string;
  thumbnail: string | File | null;
  category: string;
  createdAt: string | null;
  date: string | null;
}

export type RootStore = ReturnType<typeof rootReducer>;
