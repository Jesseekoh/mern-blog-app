import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IBlogPostType } from './Blogs';
const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<IBlogPostType>({} as IBlogPostType);
  const loaderResp = useLoaderData();
  const data = loaderResp;
  const author = data?.author.data;

  console.log(author);
  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const resp = await fetch(`http://localhost:8000/blogs/post/${blogId}`);

        if (resp.ok) {
          const data = await resp.json();
          setBlog(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getBlogDetails();
  }, []);
  return (
    <div className="flex">
      <main className="max-w-[800px]">
        <div className="blog">
          <h1 className="font-black text-3xl my-4">{blog.title}</h1>
          <p>{blogId}</p>
          <p className="leading-normal text-xl">{blog.content}</p>
        </div>
      </main>
      <aside className="side-content grow bg-white top-0  z-10 pt-16">
        <div className="author-info flex justify-center flex-col">
          <div className="profile-img ">
            <img
              className="rounded-full mx-auto"
              src={`https://www.robohash.org/${author.id}?set=set4&size=100x100`}
              alt="Author's profile picture"
            />
          </div>
          <h2 className="text-center">{author.username}</h2>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
