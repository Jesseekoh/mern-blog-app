import './postInput.css';

const PostInput = ({
  setText,
  text
}) => {
  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className='post-input-div'>
      <textarea
        value={text}
	onChange={handleTextChange}
	placeholder='Input post content here...'
      />
    </div>
  );
}
export default PostInput;
