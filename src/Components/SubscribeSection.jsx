import { useState } from "react";
import { Link } from "react-router-dom";

export default function SubscribeSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState(""); // success, error, loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://realestatebackend-uhf9.onrender.com/api/Subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "" }); // Clear form
      } else {
        console.error("Server error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#f6fafd] py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0b2c50]">
            Stay in the loop
          </h2>
          <p className="text-gray-600 mt-2">
            Get to know about the latest real estate insights.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
          >
            {status === "loading" ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>

      {/* Status Message */}
      {status === "success" && (
        <p className="text-green-600 text-center mt-4">
          Thanks for subscribing!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-4">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="text-center md:text-right text-sm text-gray-600 mt-4">
        By clicking Submit, you agree to our{" "}
        <Link to="/terms-and-privacy" className="underline text-black">
          Terms & Conditions
        </Link>
        {" and "}
        <Link to="/Privacy-policy" className="underline text-black">
          Privacy Policy
        </Link>
      </p>
    </section>
  );
}


// import { useState } from "react";

// export default function SubscribeSection() {
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted data:", formData);
//   };



//   return (
//     <section className="bg-[#f6fafd]   py-12  ">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Left content */}
//         <div className="text-center md:text-left">
//           <h2 className="text-3xl font-bold text-[#0b2c50]">
//             Stay in the loop
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Get to know about the latest real estate insights.
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-2xl"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
//             required
//           />
//           <button
//             type="submit"
//             className="flex-shrink-0  px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>

//       <p className=" text-center   md:text-right text-sm text-gray-600 mt-4">
//         By clicking Submit, you agree to our{" "}
//         <a href="#" className="underline text-black">
//           Terms & Conditions
//         </a>{" "}
//         and{" "}
//         <a href="#" className="underline text-black">
//           Privacy Policy.
//         </a>
//       </p>
//     </section>
//   );
// }
