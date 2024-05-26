import './BlogCard.css';
import profileThumbnail from '../../assets/profile_thumbnail.avif';
import { CiBookmarkPlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { GoEye } from 'react-icons/go';
import { BsHandThumbsUp } from 'react-icons/bs';
export interface IBlogCardProps {
  title: string;
  id: string;
  views: number;
  likes: number;
  authorId: string;
  createdAt: Date;
}

const BlogCard = ({
  title,
  id,
  views,
  likes,
  createdAt,
  authorId,
}: IBlogCardProps) => (
  <div className="blog-card mb-2 bg-white">
    <div className="img__wrapper">
      <Link to={`/blogs/${id}`}>
        <img
          src={'https://placehold.co/500x250?text=Blog+Image'}
          className="max-w-full object-cover block mx-auto pt-3"
        />
      </Link>
    </div>
    <div className="p-4">
      <div className="author-info flex items-center">
        <img src={profileThumbnail} className="rounded-full h-10 w-10 mr-1" />

        <Link to={`/profile/${authorId}`} className="cursor-pointer text-sm">
          Jesse Ekoh-Ordan
        </Link>
      </div>
      <div className="blog__desc_main">
        <Link to={`/blogs/${id}`}>
          <h2 className="blog__title text-xl font-bold">{title}</h2>
        </Link>
      </div>

      <div className="blog__info flex justify-between mt-4 items-center col-span-5">
        <CiBookmarkPlus
          fontWeight={900}
          size={30}
          className="bookmark-btn cursor-pointer hover:text-yellow-400  text-yellow-700 border-yellow-700  p-1"
        />
        <p className="flex items-center">
          <span className="mr-2">{views}</span> <GoEye />
        </p>
        <p className="flex items-center">
          <span className="mr-2">{likes}</span>
          <BsHandThumbsUp />
        </p>
        <p className="text-sm">{new Date(createdAt).toDateString()}</p>
      </div>
    </div>
  </div>
);

export default BlogCard;
