import React, { useState, useEffect } from "react";

const BlogImage = ({ mediaId }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!mediaId) return;

    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://sobold.co.uk/wp-json/wp/v2/media/${mediaId}`
        );

        const data = await response.json();
        setImageUrl(
  data?.media_details?.sizes?.medium?.source_url ||
  data?.source_url
);

  
      } catch (error) {
        console.log(error);
      }
    };

    fetchImage();
  }, [mediaId]);

  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Blog"
          style={{
            width: "100%",
          height: "220px",
          objectFit: "cover",
          display: "block"
          }}
        />
      ) : (
        <div>No Image</div>
      )}
    </>
  );
};

export default BlogImage;