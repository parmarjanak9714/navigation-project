import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

const BlogExport = ({ posts }) => {
  const [isExporting, setIsExporting] = useState(false);

  const getBase64FromUrl = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) return null;

      const blob = await response.blob();

      return await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      return null;
    }
  };

  const handleDownloadPDF = async () => {
    setIsExporting(true);

    try {
      const content = [
        {
          text: "BLOG REPORT",
          style: "header",
          margin: [0, 0, 0, 20],
        },
      ];

      for (const post of posts) {
        let imageData = null;

        try {
          if (post?.featured_media) {
            const mediaRes = await fetch(
              `https://sobold.co.uk/wp-json/wp/v2/media/${post.featured_media}`
            );

            const media = await mediaRes.json();

            const imageUrl =
              media?.media_details?.sizes?.medium?.source_url ||
              media?.source_url;

            // webp & svg skip
            if (
              imageUrl &&
              !imageUrl.toLowerCase().includes(".webp") &&
              !imageUrl.toLowerCase().includes(".svg")
            ) {
              imageData = await getBase64FromUrl(imageUrl);
            }
          }
        } catch (err) {
          imageData = null;
        }

        const title =
          post?.title?.rendered?.replace(/<[^>]*>/g, "").trim() ||
          "Untitled Blog";

        const description =
          post?.yoast_head_json?.description ||
          post?.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() ||
          "No description available";

        content.push({
          columns: [
            imageData
              ? {
                  image: imageData,
                  width: 120,
                }
              : {
                  text: "No Image",
                  width: 120,
                  margin: [0, 40, 0, 0],
                },

            {
              width: "*",
              stack: [
                {
                  text: title,
                  bold: true,
                  fontSize: 16,
                  color: "#1e3a8a",
                  margin: [0, 0, 0, 8],
                },
                {
                  text: description,
                  fontSize: 11,
                  color: "#4b5563",
                },
              ],
            },
          ],

          columnGap: 15,
          margin: [0, 0, 0, 15],
        });

        content.push({
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 515,
              y2: 0,
              lineWidth: 1,
            },
          ],
          margin: [0, 5, 0, 15],
        });
      }

      const docDefinition = {
        pageSize: "A4",
        pageMargins: [30, 30, 30, 30],

        content,

        styles: {
          header: {
            fontSize: 24,
            bold: true,
            alignment: "center",
          },
        },
      };

      pdfMake.createPdf(docDefinition).download("Blog-Report.pdf");
    } catch (error) {
      console.error("PDF Export Error:", error);
    }

    setIsExporting(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-6 flex justify-end">
      <button
        type="button"
        disabled={isExporting}
        onClick={handleDownloadPDF}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer disabled:opacity-50"
      >
        {isExporting ? "Generating PDF..." : "📄 Export PDF"}
      </button>
    </div>
  );
};

export default BlogExport;