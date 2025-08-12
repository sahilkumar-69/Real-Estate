import { useEffect } from "react";

const DownloadBrochure = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/realty_bytes_may_2025.pdf"; // relative to
    link.download = "realty_bytes_may_2025.pdf";
    link.click();

    // Optionally redirect after download
    setTimeout(() => {
      window.location.href = "/services";
    }, 100);
  }, []);

 
};

export default DownloadBrochure;
