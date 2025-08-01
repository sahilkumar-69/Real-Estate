import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function DeveloperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [developer, setDeveloper] = useState(null);
  const [otherDeveloper, setOtherDeveloper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window.scrollTo(0, 0);

    const fetchDeveloperById = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/All-Developer/${id}`,
          { signal }
        );

        if (!res.ok) throw new Error("Failed to fetch developer");

        const result = await res.json();
        console.log("Developer Detail:", result);

        // Backend returns { success: true, data: {...} }
        if (!result || !result.data || !result.data._id) {
          throw new Error("Invalid developer data format");
        }

        setDeveloper(result.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherDevelopers = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/All-Developer`,
          { signal }
        );
        const all = await res.json();

        if (!Array.isArray(all.data)) return;

        const others = all.data.filter((item) => item._id !== id);
        setOtherDeveloper(others);
      } catch (err) {
        console.error("Error fetching other developers", err.message);
      }
    };

    fetchDeveloperById();
    fetchOtherDevelopers();

    return () => controller.abort();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-blue-600 text-xl">
        Loading developer info...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-xl">
        Error: {error}
      </div>
    );

  if (!developer)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 text-xl">
       <PulseLoader />.
      </div>
    );



  return (
    <div className="min-h-screen mt-15 bg-gray-100 font-sans px-4 py-6 md:px-10">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {developer.name}
        </h1>

        {developer.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={developer.image}
              alt={developer.name}
              className="w-full max-w-4xl h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {developer.description && (
          <p className="text-gray-700 leading-relaxed text-lg">
            {developer.description}
          </p>
        )}
      </div>

      {/* Optional: Other developers section */}
      {otherDeveloper.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Other Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {otherDeveloper.map((dev) => (
              <div
                key={dev._id}
                className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
                onClick={() => navigate(`/developers/${dev._id}`)}
              >
                <h3 className="text-lg font-semibold">{dev.name}</h3>
                {dev.image && (
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="h-40 w-full object-cover rounded mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
