import './postButton.css';

const PostButton = () => {
  const handleSubmit = () => {
    alert('Post Successful !!');
  }

  return (
    <div className='post-button-div'>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
export default PostButton;
