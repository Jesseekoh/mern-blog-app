import './blogContent.css';

const blogContent = ({
  time=1
}) => {
  return (
    <div className='blog-container'>
      <div className='blog-post-main-div'>
        <div className='blog-post'>
          <h1>Blog Image</h1>
        </div>
      </div>
      <p>{time} min ago</p>
    </div>
  );
}
export default blogContent;
