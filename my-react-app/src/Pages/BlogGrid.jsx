import React, { useState, useEffect } from "react";
import BlogImage from "./BlogImage";
import { NavLink, useNavigate } from "react-router-dom";
const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
    
  const navigate = useNavigate(); 



  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://sobold.co.uk/wp-json/wp/v2/posts/"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 md:px-12 py-10 font-sans select-none box-border w-full items-stretch">
      {posts.map((post) => (
        <div key={post.id} className="w-full bg-white border border-gray-100 rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between box-border cursor-pointer group"
        onClick={() => navigate(`/blod-detail/${post.id}`)} 
        >
          
          {/* featured_media ni id BlogImage ne mokli */}
          <BlogImage mediaId={post.featured_media} />

          <h3
            className="text-base md:text-lg font-bold text-gray-800 mb-2 mt-4 tracking-wide line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[48px]"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />

          <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light line-clamp-3">
            {post.excerpt.rendered
              .replace(/<[^>]*>/g, "")
              .substring(0, 100)}
            ...
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
