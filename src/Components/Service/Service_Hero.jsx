import axios from "axios";
import { ToggleLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ClipLoader } from "react-spinners";

const Service_Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  }, [showForm]);

  const toggleForm = () => setShowForm(!showForm);

  const handleOnSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://realestatebackend-2-v5e5.onrender.com/api/create-Inquiry",
        data
      );

      if (resp.data?.success) {
        alert("Query Submitted");
        toggleForm();
        setData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setLoading(true);
      }
    } catch (formError) {
      setLoading(true);
      setData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      alert(formError);
    }
  };

  return (
    <section
      className="w-full h-[70vh]   lg:h-[95vh] bg-cover bg-center z-10 flex items-center px-6 md:px-24 relative"
      style={{
        backgroundImage: `url("https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg")`,
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-[46rem]">
        <h1 className="text-3xl md:text-5xl space-y-3.5 text-black font-bold mb-4">
          Top–Notch{" "}
          <span className="bg-[#ac9976] px-2 rounded-md text-white">
            Property Services
          </span>{" "}
          in India
        </h1>

        <p className="text-lg  mb-6">
          We provide turnkey solutions to help you reap the best returns on your
          investment.
        </p>

        <button
          onClick={toggleForm}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Enquire Now
        </button>
      </div>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md relative">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-3 text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
            <form onSubmit={handleOnSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />

              <PhoneInput
                country={"in"}
                value={data.phoneNumber}
                onChange={(phoneNumber) => {
                  setData((prev) => ({ ...prev, phoneNumber }));
                }}
                inputStyle={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "56px",
                  fontSize: "16px",
                  border: "1px solid #E5E4E2",
                  borderRadius: "4px",
                  width: "100%",
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
                dropdownStyle={{ zIndex: 9999 }}
              />

              <textarea
                placeholder="Your Message"
                name="message"
                value={data.message}
                onChange={(e) => {
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
                rows="3"
                className="w-full border resize-none border-gray-300 rounded-md px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                {loading ? <ClipLoader size={18} /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service_Hero;
