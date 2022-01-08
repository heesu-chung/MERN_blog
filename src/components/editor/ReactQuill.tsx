import React, { useCallback, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';

interface Props {
  setBody: (value: string) => void;
  body: string;
}

export const Quill: React.FC<Props> = ({ setBody, body }) => {
  const dispatch = useDispatch();
  const quillRef = useRef<ReactQuill>(null);

  const modules = { toolbar: { container } };

  const handleChangeImage = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.onchange = async () => {
      const files = input.files;
      if (!files) return;
      dispatch({});

      const file = files[0];
      //const check = checkImage(file);
      dispatch({});
      const quill = quillRef.current;
      const range = quill?.getEditor().getSelection()?.index;
      if (range !== undefined) {
        quill?.getEditor().insertEmbed(range, 'image', `&{}`);
      }

      dispatch({});
    };
  }, [dispatch]);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    let toolbar = quill.getEditor().getModule('toolbar');
    toolbar.addHandler('image', handleChangeImage);
  }, [handleChangeImage]);
  return (
    <div>
      <ReactQuill placeholder="write somethings..." onChange={(e) => setBody(e)} value={body} ref={quillRef} />
    </div>
  );
};

let container = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction
  [{ align: [] }],

  ['clean', 'link', 'image', 'video']
];

export default Quill;
