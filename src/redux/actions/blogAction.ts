import { getPackedSettings } from 'http2';
import { Dispatch } from 'redux';
import { IBlog } from '../../utils/Typescript';
import { postAPI, getAPI, putAPI, deleteAPI } from '../../utils/FetchData';
import { GET_HOME_BLOGS, IGetHomeBlogsType } from '../types/blogType';

export const getHomeBlogs = () => async (dispatch: Dispatch<IGetHomeBlogsType>) => {
  try {
    const res = await getAPI('home/blogs');

    dispatch({
      type: GET_HOME_BLOGS,
      payload: res.data
    });
  } catch (err: any) {}
};
