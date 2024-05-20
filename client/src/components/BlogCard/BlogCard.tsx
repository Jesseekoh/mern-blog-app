import './BlogCard.css';
import blogCardImg from '../../assets/https __dev-to-uploads.s3.amazonaws.com_uploads_articles_v68hxjv62vvdj4euqw4w.avif';
import profileThumbnail from '../../assets/profile_thumbnail.avif';
import { CiBookmarkPlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const BlogCard = () => (
  <div className="blog-card mb-2 bg-white">
    <div className="img__wrapper ">
      <img src={blogCardImg} className="max-w-full object-cover block" />
    </div>
    <div className="p-4">
      <div className="author-info flex items-center">
        <img src={profileThumbnail} className="rounded-full h-10 w-10 mr-1" />

        <Link to={'/'} className="cursor-pointer text-sm">
          Jesse Ekoh-Ordan
        </Link>
      </div>
      <div className="blog__desc_main">
        <h2 className="blog__title text-xl font-bold">
          Why Design Patterns Matter:A Beginner's Guide to Choosing the Right
          Pattern
        </h2>
      </div>

      <div className="blog__info flex justify-between mt-4 items-center col-span-5">
        <CiBookmarkPlus
          fontWeight={900}
          size={30}
          className="bookmark-btn cursor-pointer  text-yellow-700 border-yellow-700  p-1"
        />

        <p className="text-sm">May 19</p>
      </div>
    </div>
  </div>
);

export default BlogCard;
