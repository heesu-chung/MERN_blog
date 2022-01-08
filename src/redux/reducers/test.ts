export const UP_COUNT = 'UP_COUNT';

const initState = {
  id: 'chout',
  count: 1
};

type stateType = {
  id: any;
  count: number;
};

export interface getStateType {
  type: typeof UP_COUNT;
  payload: stateType;
}

export const testReducer = (state: stateType = initState, action: getStateType): stateType => {
  switch (action.type) {
    case UP_COUNT:
      console.log(typeof action.payload);
      const str = action.payload;
      return {
        ...state,
        count: state.count + 1,
        id: str
      };
    default:
      return state;
  }
};
