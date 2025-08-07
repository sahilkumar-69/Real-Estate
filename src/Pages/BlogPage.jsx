import { useEffect, useState } from "react";
import MainGrid from "../Components/Developer/MainGrid";
import ContactForm from "../Components/Home/ContactForm";
import SubscribeSection from "../Components/SubscribeSection";
import { PulseLoader } from "react-spinners";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/blogs`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`);
        }

        const result = await response.json();

        if (!Array.isArray(result)) {
          throw new Error("Invalid blog format returned");
        }

        setBlogPosts(result);
        setFilteredPosts(result);
      } catch (err) {
        setError(
          err.message || "Unexpected error occurred while loading blogs."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Search + category filtering logic
  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm.trim()) {
      filtered = filtered.filter((post) =>
        post.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, blogPosts]);

  return (
    <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-6 md:px-20">
      {/* Header Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1f3c88]">
          News, Media Gallery & Insights
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Take a look at the latest Real Estate News, Videos & Insights.
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 rounded-lg border w-72"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border w-64"
        >
          <option value="All">All Categories</option>
          <option value="News">News</option>
          <option value="Videos">Videos</option>
          <option value="Insights">Insights</option>
        </select>
      </div>

      {/* Blog Content */}
      <div className="mb-10">
        {loading ? (
          <div className="text-center text-blue-600 text-xl py-10">
            <PulseLoader />
          </div>
        ) : error ? (
          <div className="text-center text-red-600 text-xl py-10">
            Error: {error}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-yellow-600 text-xl py-10">
            No blog posts found.
          </div>
        ) : (
          <MainGrid blog={true} data={filteredPosts} />
        )}
      </div>

      {/* Contact + Subscribe */}
      <ContactForm />
      <div className="px-6 md:px-10 lg:px-20">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default BlogPage;

// import { useEffect, useState } from "react";
// import NewsHeader from "../Components/Blog/Hero";
// import MainGrid from "../Components/Developer/MainGrid";
// import ContactForm from "../Components/Home/ContactForm";
// import SubscribeSection from "../Components/SubscribeSection";
// // import { blogPosts } from "../Data";

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `https://realestatebackend-2-v5e5.onrender.com/api/blogs`
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch blogs: ${response.status}`);
//         }

//         const result = await response.json();

//         if (!Array.isArray(result)) {
//           throw new Error("Invalid blog format returned");
//         }

//         setBlogPosts(result);
//       } catch (err) {
//         setError(
//           err.message || "Unexpected error occurred while loading blogs."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-6 md:px-20">
//       <NewsHeader />

//       <div className="mb-10">
//         {loading ? (
//           <div className="text-center text-blue-600 text-xl py-10">
//             Loading blogs...
//           </div>
//         ) : error ? (
//           <div className="text-center text-red-600 text-xl py-10">
//             Error: {error}
//           </div>
//         ) : blogPosts.length === 0 ? (
//           <div className="text-center text-yellow-600 text-xl py-10">
//             No blog posts found.
//           </div>
//         ) : (
//           <MainGrid blog={true} data={blogPosts} />
//         )}
//       </div>

//       <ContactForm />

//       <div className="px-6 md:px-10 lg:px-20">
//         <SubscribeSection />
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
