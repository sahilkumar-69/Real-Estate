import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const questions = [
  {
    question: "What is the ideal property type for you?",
    options: ["Apartments", "Villas", "Townhouses", "Penthouses"],
  },
  {
    question: "What is your budget range?",
    options: ["< ₹50 Lakhs", "₹50L - ₹1Cr", "₹1Cr - ₹2Cr", "₹2Cr+"],
  },
  {
    question: "How many bedrooms do you need?",
    options: ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"],
  },
  {
    question: "Preferred location?",
    options: ["Mumbai", "Bangalore", "Delhi", "Hyderabad"],
  },
  {
    question: "How soon do you plan to buy?",
    options: ["Immediately", "1-3 months", "3-6 months", "6+ months"],
  },
];

const QuestionnaireModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [step]: option }));
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      answers,
      ...userInfo,
    };

    try {
      //   const res = await fetch("https://your-api-endpoint.com/submit", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(payload),
      //   });

      //   if (res.ok) {
      //     setFormSubmitted(true);
      //   } else {
      //     alert("Submission failed");
      //   }

      console.log("submitted", payload);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setAnswers({});
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      language: "",
    });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setStep(0);
    setAnswers({});
    setUserInfo({ name: "", email: "", phone: "", language: "" });
    setFormSubmitted(false);
    onClose();
  };

  const current = questions[step];

  return (
    <div className="fixed inset-0 z-50  bg-blue-900/60 backdrop-blur-md flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="bg-white   rounded-xl shadow-xl w-full max-w-xl p-6 space-y-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-6 text-gray-500   hover:text-red-600 text-3xl"
        >
          &times;
        </button>

        {/* Step Tracker */}
        {step < questions.length && (
          <p className="text-sm   text-gray-500 font-medium">
            Question {step + 1} of {questions.length}
          </p>
        )}

        {/* Question Steps */}
        {step < questions.length ? (
          <>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
              {current.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-4 rounded-lg border text-left text-gray-700 font-medium transition-all duration-200 ${
                    answers[step] === option
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className={`px-5 py-2 rounded-lg border text-sm ${
                  step === 0
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "text-gray-700 border-gray-400 hover:bg-gray-100"
                }`}
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[step]}
                className={`px-6 py-2 rounded-lg text-sm font-semibold ${
                  answers[step]
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-300 text-white cursor-not-allowed"
                }`}
              >
                Next →
              </button>
            </div>
          </>
        ) : !formSubmitted ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Please fill in your details
            </h2>

            <form
              onSubmit={handleFormSubmit}
              className="w-full   bg-white flex    rounded-md    p-6 sm:p-8 md:p-10 space-y-6"
            >
              <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="name">Name</label>
                    <input
                      className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
                      placeholder="Name"
                      type="text"
                      name="name"
                      id="name"
                      value={userInfo.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="email">Email</label>
                    <input
                      className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                  <div className="flex w-full lg:w-1/2 flex-col gap-y-1">
                    <label htmlFor="phone">Phone</label>
                    <PhoneInput
                      country={"in"}
                      value={userInfo.phone}
                      onChange={(phone) =>
                        setUserInfo((prev) => ({ ...prev, phone }))
                      }
                      inputStyle={{
                        paddingTop: "21px",
                        paddingBottom: "21px",
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
                  </div>

                  {/* Language */}
                  <div className="flex w-full lg:w-1/2   flex-col gap-y-1">
                    <label htmlFor="language">Preferred Language</label>
                    <select
                      id="language"
                      name="language"
                      value={userInfo.language}
                      onChange={handleChange}
                      className="w-full bg-white outline-[1px]  outline-[#E5E4E2] focus:outline-[#C0C0C0] p-3 rounded-sm text-md"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
                >
                  Submit Detail
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-green-600">Thank you!</h2>
            <p className="text-gray-600">
              Your information has been submitted successfully.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireModal;
