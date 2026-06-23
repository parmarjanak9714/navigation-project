import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogImage from './BlogImage';

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await fetch(`https://sobold.co.uk/wp-json/wp/v2/posts/${parseInt(blogId)}`);
        console.log(response)
        const data = await response.json();
        console.log(data)
        setBlog(data)
        
        // if (Array.isArray(data)) {
        //   const foundBlog = data.find(item => item.id === parseInt(blogId));
        //   setBlog(foundBlog);
        // }
        setLoading(false);
      } catch (error) {
        console.error("blog details invalide:", error);
        setLoading(false);
      }
    };

    fetchSingleBlog();
  }, [blogId]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '100px' }}> Loading Blog Details...</div>;
  
  
  if (!blog) return <div style={{ textAlign: 'center', marginTop: '100px' }}> Blog Not Found!</div>;

//   title
  const titleHtml = blog?.title?.rendered || "No Title Available";
//description
const contentHtml = blog?.yoast_head_json?.description || "No Content Available";

  
  // date
  const blogDate = blog?.date 
    ? new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : "No Date Available";

  const blogType = blog?.type || "post";

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'Arial' }}>
      
      {/* return button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{ padding: '8px 15px', marginBottom: '20px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        ⬅ Back to Blogs
      </button>

      {/* type base*/}
      <div style={{ marginBottom: '10px' }}>
        <span style={{ background: '#007bff', color: '#fff', padding: '4px 10px', borderRadius: '5px', fontSize: '12px', textTransform: 'uppercase' }}>
           Type: {blogType}
        </span>
      </div>

      {/* origanal titel */}
      <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#222' }} dangerouslySetInnerHTML={{ __html: titleHtml }} />
      
      {/* origanal date*/}
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>🗓️ Published on: {blogDate}</p>

      {/* origenal */}
      <div style={{ width: '100%', maxHeight: '400px', overflow: 'hidden', borderRadius: '12px', marginBottom: '30px' }}>
        {blog.featured_media ? <BlogImage mediaId={blog.featured_media} /> : null}
      </div>

      {/* origenal decription*/}
      <div 
        className="blog-full-content"
        style={{ lineHeight: '1.8', fontSize: '16px', color: '#333' }} 
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />

    </div>
  );
};

export default BlogDetails;
