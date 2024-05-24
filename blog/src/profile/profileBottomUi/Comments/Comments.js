import '../ProfileBottomUi.css';
import RecentReaction from '../RecentReaction';
import RecomendedTopics from '../RecomendedTopics';
import Post from '../../../feed/MiddleUI/Posts/Post';
import image1 from '../../../assets/alex.jpg';
import image2 from '../../../assets/pexels-jacky-hong-771747059-19414561.jpg';
import image3 from '../../../assets/femi.jpg';

const ProfileCommentUi = () => {
  return (
    <div className='Profile-Bottom-Ui'>
      <div className='left-section'>
        <RecentReaction />
      </div>
      <div className='middle-section'>
        <Post
	  image={image1}
	  name='Alexanda Smith'
	  postContent='Breaking... Isreal Not Holding Back as 4 World health Workers got hit from Isreal Attack 1 Canadian, 2 German and 1 American. Read more...'/>
        <Post
	  image={image2}
	  name='Mery Matha'
	  postContent='Recommend Books You Will Love It.. 1. A Slave but a Leader 2. CEO do Know nothing. follow for More.. #Books #Readers'
	  />
        <Post
	  image={image3}
	  name='Femi Ayo'
	  postContent='Enroll for Any of the ALX tech Stack, With Good Learning Material and a Wondaful community!!! #ALXSE #C15'
	/>
      </div>
      <div className='right-section'>
        <RecomendedTopics />
      </div>
    </div>
  );
}
export default ProfileCommentUi;
