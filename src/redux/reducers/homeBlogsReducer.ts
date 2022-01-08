import { GET_HOME_BLOGS, IHomeBlogs, IGetHomeBlogsType } from '../types/blogType';

const initState: IHomeBlogs[] = [
  {
    _id: 'kkk',
    name: 'kkk',
    count: 'kkk',
    blogs: [
      {
        _id: 'kkk',
        user: 'dkdk',
        title: 'title 1 article',
        content:
          'Curae; ullamcorper magna venenatis nec pharetra aptent quam tellus primis. Metus quisque turpis mattis curae; nam hac convallis. Suspendisse magna nam interdum, purus ridiculus nisi pellentesque nunc. Penatibus duis risus massa, lacinia placerat. Morbi facilisi feugiat montes diam posuere tincidunt imperdiet. Nunc accumsan bibendum auctor dui lorem. Volutpat ut phasellus curabitur vivamus condimentum. Pulvinar et integer nisl. Habitasse ante non consectetur dictum parturient augue faucibus pharetra at justo sit semper. Torquent commodo hac a? Justo malesuada tempor, eget lectus varius aliquet semper sapien.',
        description: 'this is the first Article',
        thumbnail: null,
        category: 'article',
        createdAt: null
      }
    ]
  }
];
const homeBlogsReducer = (state: IHomeBlogs[] = initState, action: IGetHomeBlogsType) => {
  switch (action.type) {
    case GET_HOME_BLOGS:
      return action.payload;
    default:
      return state;
  }
};

export default homeBlogsReducer;
