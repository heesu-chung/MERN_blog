// Action Type / Types / Interface
import { IBlog } from '../../utils/Typescript';

export const GET_HOME_BLOGS = 'GET_HOME_BLOGS';

export interface IHomeBlogs {
  _id: string;
  name: string;
  count: string;
  blogs: IBlog[];
}

export interface IGetHomeBlogsType {
  type: typeof GET_HOME_BLOGS;
  payload: IHomeBlogs[];
}
