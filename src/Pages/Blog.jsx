import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogContext from "../Context/Blogs";

export default function DedicatedBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Blog, setBlog] = useState({});
  const { blogs } = useContext(BlogContext);

  useEffect(() => {
    scrollTo(0, 0);
    const selectedBlog = blogs.find((post) => post._id === id);
    setBlog(selectedBlog);
  }, [id, blogs]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans px-4 py-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-white shadow rounded-lg p-4 h-fit sticky top-6">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">
            Other Blog Posts
          </h2>
          <ul className="space-y-3">
            {blogs
              .filter((post) => post._id !== id)
              .map((post) => (
                <li
                  key={post._id}
                  onClick={() => navigate(`/blog/${post._id}`)}
                  className="text-blue-700 hover:underline cursor-pointer text-sm"
                >
                  {post.title.slice(0, 50)}...
                </li>
              ))}
          </ul>
        </aside>

        {/* Main Blog Section */}
        <div className="lg:w-3/4 w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <BlogComponent {...Blog} />
        </div>
      </div>
    </div>
  );
}

function BlogComponent({ title, author, createdAt, blogContent }) {
  return (
    <article className="p-6 sm:p-8 md:p-10 lg:p-12">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <div className="text-gray-600 text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            By <span className="font-medium ml-1 text-blue-600">{author}</span>
          </p>
          {/* <span className="hidden sm:inline-block text-gray-400">•</span> */}
          {/* <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <time dateTime={createdAt}>{createdAt.split("T")[0]}</time>
          </p> */}
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none leading-loose text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogContent }}
      />
    </article>
  );
}
