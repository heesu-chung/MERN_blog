import React, { useState, useEffect } from 'react';
import { IBlog, RootStore } from '../utils/Typescript';
import { useSelector, useDispatch } from 'react-redux';

const View = () => {
  const initState = {
    title: '',
    content: '',
    description: ''
  };
  const dispatch = useDispatch()
  dispatch({type: ''});
  const [blog, setBlog] = useState<IBlog>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const {  } = useSelector((state: RootStore) => state); 

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
    </div>
  );
};

export default View;
