import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CreatePost = () => {
  const [blogContent, setBlogContent] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  return (
    <div>
      <h1 className="text-center">Create Post</h1>
      <form action="">
        <input type="text" placeholder="Title" />
        <input
          type="file"
          name="header-image"
          id="header-image"
          accept=".png, .jpg, .jpeg"
        />
        <input type="text" placeholder="Summary" />
        <ReactQuill
          // theme="bubble"
          value={blogContent}
          onChange={setBlogContent}
          modules={modules}
          formats={formats}
        />
      </form>
    </div>
  );
};

export default CreatePost;
