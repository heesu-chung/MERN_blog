import React, { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import Quill from '../components/editor/ReactQuill';
import { getAPI } from '../utils/FetchData';
import { IBlog } from '../utils/Typescript';

interface Props {
  id?: string;
}

const CreatePost: React.FC<Props> = ({ id }) => {
  const init = {
    user: '',
    title: '',
    content: '',
    description: '',
    thumbnail: '',
    category: '',
    createdAt: new Date().toISOString()
  };
  const [blog, setBlog] = useState<IBlog>(init);
  const [body, setBody] = useState('');

  const divRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const [oldData, setOldData] = useState(init);

  useEffect(() => {
    if (!id) return;

    getAPI(`blog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setBody(res.data.content);
        setOldData(res.data);
      })
      .catch((err) => console.log(err));

    const initData = {
      user: '',
      title: '',
      content: '',
      description: '',
      thumbnail: '',
      category: '',
      createdAt: new Date().toISOString()
    };

    return () => {
      setBlog(initData);
      setBody('');
      setOldData(initData);
    };
  }, [id]);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const text = div?.innerText as string;
    setText(text);
  }, [body]);

  const handleSubmit = async () => {};

  return (
    <div>
      <Quill setBody={setBody} body={body} />
      {/* <div
        ref={divRef}
        dangerouslySetInnerHTML={{
          __html: body
        }}
        style={{ display: 'none' }}
      />

      <small>{text.length}</small>

      <button className="btn btn-dark mt-3 d-block mx-auto" onClick={handleSubmit}>
        {id ? 'Update Post' : 'Create Post'}
      </button> */}
    </div>
  );
};

export default CreatePost;
