import React, { useState } from 'react';
import Dispatch from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../utils/Typescript';
import { UP_COUNT } from '../redux/reducers/test';

const Test = () => {
  const [text, setText] = useState('');
  const count = useSelector((state: RootStore) => state.testReducer.count);
  const id = useSelector((state: RootStore) => state.testReducer.id);
  const dispatch = useDispatch();

  const onIncrease = (e: any) => {
    dispatch({ type: UP_COUNT, payload: text });
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} placeholder="push some text here!" onChange={(e) => setText(e.target.value)} />
      <button className="plus" onClick={onIncrease}>
        +
      </button>
      <br />
      {id}
      <br />
      {count}
    </div>
  );
};

export default Test;
