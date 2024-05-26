import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.bubble.css';

const CreatePost = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [files, setFiles] = useState<FileList | null>();
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

  const handleSubmit = async () => {
    const postData = new FormData();
    postData.set('title', title);
    postData.set('content', content);
    if (files) {
      postData.set('file', files[0]);
    }

    const response = await fetch('http://localhost:8000/create-post', {
      method: 'POST',
      body: postData,
    });
    const data = await response.json();
  };
  return (
    <div className="px-2">
      <h1 className="text-center text-2xl font-black">Create Post</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2"
        />
        <input
          type="file"
          name="header-image"
          id="header-image"
          onChange={(e) => setFiles(e.target.files)}
          accept=".png, .jpg, .jpeg"
          className="p-2"
        />
        <ReactQuill
          theme="snow"
          placeholder="Your Blog here..."
          value={content}
          onChange={(value) => setContent(value)}
          modules={modules}
          formats={formats}
        />

        <button onClick={handleSubmit} className="text-white">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
