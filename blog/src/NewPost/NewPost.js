/*import BackButton from '../profile/profiletopUi/BackButton';
import PostButton from './postButton';
import PostInput from './postInput';
import './NewPost.css';
import { Link } from 'react-router-dom'
*/
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './postEditor.css';
import { toast } from 'react-toastify';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blackquote'],
      [
        { list: 'ordered' },
	{ list: 'bullet' },
	{ indent: '-1' },
	{ indent: '+1' }
      ],
      ['link', 'image', 'video', 'code']
    ]
  }
  /*
        <div className='preview'
	  dangerouslySetInnerHTML={{ __html: value }}
	/>
  */
  const savePost = async () => {
    const response = await fetch('http://localhost:8000/blogs/create', {      method: 'POST',
      body: JSON.stringify({ content, title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (response.ok) {
      const { success, message } = data;
      if (success) {
        toast.success(message, { position: 'bottom-right' });
        navigate('/');
      } else {
        toast.error(message, { position: 'bottom-right' });
      }
    }
  }

  return (
    <div className='containerr'>
      <div className='row'>
        <div className='editor'>

	  <ReactQuill theme='snow'
            value={title}
            onChange={setTitle}
            className='editor-input title-div'
          />

	  <ReactQuill theme='snow'
	    value={content}
	    onChange={setContent}
	    className='editor-input content-div'
	    modules={modules}
	  />
	</div>
	<div className='post-button-div'>
	  <button onClick={savePost}>Post</button>
	</div>
      </div>
    </div>
  );
}
export default NewPost;
