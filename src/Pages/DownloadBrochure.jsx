// src/pages/DownloadBrochure.jsx
import { useEffect } from "react";

const DownloadBrochure = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/realty_bytes_may_2025.pdf"; // relative to /public
    link.download = "realty_bytes_may_2025.pdf";
    link.click();

    // Optionally redirect after download
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  }, []);

  // return (
  //   <div className="text-center mt-20 text-lg">Preparing your download...</div>
  // );
};

export default DownloadBrochure;
