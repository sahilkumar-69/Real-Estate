import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function DedicatedBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const controller = new AbortController();
    const { signal } = controller;

    const fetchBlogById = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/blogs/${id}`,
          { signal }
        );

        if (!res.ok) throw new Error("Failed to fetch blog");

        const result = await res.json();

        // Make sure the returned data is a single blog object
        if (!result || !result._id) {
          throw new Error("Invalid blog format returned");
        }

        setBlog(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchAllBlogs = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/blogs`,
          { signal }
        );
        const all = await res.json();
        const others = all.filter((item) => item._id !== id);
        setOtherBlogs(others);
      } catch (err) {
        console.error("Error fetching other blogs:", err.message);
      }
    };

    fetchBlogById();
    fetchAllBlogs();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-blue-600 text-xl">
        <PulseLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans px-4 py-6 md:px-10">
      <div className="flex flex-col mt-15 lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 hidden lg:block bg-white shadow rounded-lg p-4 max-h-[80vh]  overflow-y-auto sticky top-20">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">
            Other Blog Posts
          </h2>
          <ul className="space-y-3">
            {otherBlogs.map((post) => (
              <li
                key={post._id}
                onClick={() => navigate(`/blogs/${post._id}`)}
                className="text-blue-700 hover:underline cursor-pointer text-sm"
              >
                {post.title.slice(0, 50)}...
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Blog */}
        <div className="lg:w-3/4 w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <BlogComponent {...blog} />
        </div>
      </div>
    </div>
  );
}

function BlogComponent({ _id, title, img, tag, createdAt, blogContent }) {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  return (
    <article className="p-6 sm:p-8 md:p-10 lg:p-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <div className="text-gray-600 text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {tag && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              {tag}
            </span>
          )}
          <p className="flex items-center">
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
            <time dateTime={createdAt}>{formattedDate}</time>
          </p>
        </div>
      </header>

      {/* Blog Image */}
      {img && (
        <div className="mb-8">
          <img
            src={img}
            alt={title}
            className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Blog Content */}
      <div
        className="prose prose-lg max-w-none leading-loose text-gray-700"
        dangerouslySetInnerHTML={{
          __html: blogContent || "<p>No content available.</p>",
        }}
      />
    </article>
  );
}
