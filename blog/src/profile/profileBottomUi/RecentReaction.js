import './RecentReaction.css';

const RecentReaction = () => {
  return (
    <div className="reaction-main-div">
      <h3>Recent Reaction</h3>
      <div className="reaction-info-div">
        <h4>@Edward Odey</h4>
	<p className='reaction-details'>recently like your post</p>
	<p className='link-to-reacted-post'>show post</p>
      </div>
    </div>
  );
}
export default RecentReaction;
