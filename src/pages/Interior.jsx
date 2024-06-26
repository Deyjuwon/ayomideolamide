import Header from "../components/Header";
import data from "../utils/InteriorImgs";

const Interior = () => {
  return (
    <div>
      <Header color="text-gray-400" logoColor="text-black" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 auto-rows-masonry">
        {data.map((item, idx) => (
          <div key={idx} className="relative w-full h-full">
            <img
              src={item.imgUrl}
              alt=""
              className="w-full h-full object-cover"

            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interior;
