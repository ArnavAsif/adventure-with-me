import { useContext } from "react";
import { HomeDataContext } from "./HomePage";


const HomeEcho = () => {
const {adventureData} = useContext(HomeDataContext)
    
  return (
    <section className="bg-green-50 py-8 px-4 rounded">
      <h2 className="text-3xl font-bold text-center mb-2">Eco Blog</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Join David Greenfield, a passionate advocate for sustainable living, as
        he shares his wisdom and insights on everything from planting a
        thriving vegetable garden to reducing your environmental footprint.
      </p>

      <div className="max-h-[500px] overflow-y-auto space-y-6">
        {adventureData.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow p-4 gap-4 transform transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200"
          >
            <img
              src={blog.image}
              alt={blog.adventureTitle}
              className="w-full md:w-48 h-32 md:h-36 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-green-900 hover:underline cursor-pointer">
                {blog.adventureTitle}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{blog.shortDescription}</p>
              <p className="text-xs text-gray-500 mt-2">
                {blog.categoryName} • {blog.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeEcho;
