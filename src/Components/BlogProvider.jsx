// BlogProvider.js
import { useState, useEffect } from "react";
import BlogContext from "../context/Property.js";

const BlogProvider = ({ children }) => {
  const [property, setProperty] = useState([]);
  const [buyProperty, setBuyProperty] = useState([]);
  // const [featuredPost, setFeaturedPost] = useState([]);
  const [project, setProject] = useState([]);
  const [area, setArea] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const blogResp = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/allProperty"
      );
      const blogData = await blogResp.json();

      setProperty(blogData);

      const citiesResp = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/All-Area"
      );
      const citiesData = await citiesResp.json();
      setArea(citiesData);

      const serviceResp = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/all-buyProperty"
      );
      const serviceData = await serviceResp.json();

      setBuyProperty(serviceData);

      const recentPostResp = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/API/all-ProjectData"
      );
      const recentPostData = await recentPostResp.json();

      setProject(recentPostData);

      //   const featuredPostResp = await fetch(
      //     "https://cawebsite-gg5g.onrender.com/api/getfeature-post"
      //   );
      //   const featuredPostData = await featuredPostResp.json();

      //   setFeaturedPost(featuredPostData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // console.log(project)
  }, []);

  return (
    <BlogContext.Provider
      value={{ property, loading, project, buyProperty, area }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
