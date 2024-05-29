import userImage from '../userUi/userImage';
import userName from '../userUi/userName';

const FullBlogPostUi = () => {
  return (
    <div className="blog-content-div">
      <div className="blog-full-image">
        <img />
      </div>
      <div className="blog-info-div">
        <div>
          <userImage />
          <div>
            <userName />
            <p>Posted on May 26</p>
          </div>
        </div>
        <div className="blog-title">
          <h1>Microsoft VS2022 Cascadia Code font</h1>
        </div>
      </div>
      <div className="blog-content-div">
        <p>
          Introduction Microsoft Visual Studio besides being a great IDE
          provides the ability to customize the working environment. Most
          developers tend to stop customizing at the theme, dark, light or a
          third party theme along font size
        </p>
      </div>
    </div>
  );
};
export default FullBlogPostUi;
