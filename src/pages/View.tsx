import React, { useState, useEffect } from 'react';
import { IBlog, RootStore } from '../utils/Typescript';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: 800px) {
    width: 600px;
    margin: 30px auto;
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    width: 800px;
    margin: 30px auto;
    font-size: 16px;
  }
`;

const View = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state: RootStore) => state); // { homeBlogsReducer: {...}, testReducer: {...}}
  // const state = useSelector((state: RootStore) => state.homeBlogsReducer); // {_id:'', name: '', count: '', blogs: Array(1)}
  const { title, content, description } = useSelector((state: RootStore) => state.homeBlogsReducer[0].blogs[0]);

  return (
    <Wrapper>
      <div>
        {title}
        <br />
        <br />
        {content}
        <br />
        <br />
        {description}
        <br />
      </div>
    </Wrapper>
  );
};

export default View;
