import Header from "../components/Header";
import shalom from '../assets/shalom2.webp';

const Blog = () => {
  return (
    <div className="max-h-screen">
        <Header color='text-gray-400' logoColor='text-black' />
        <div className="relative">
            <img src={shalom} alt="FAQ Banner" className="w-full h-44 lg:h-64 object-cover opacity-30" />
            <p className="text-base md:text-3xl text-gray-500 font-bold absolute inset-0 flex justify-center items-center">BLOG</p>
        </div>
            <div className="flex items-center justify-center pt-10">
                <h1 className="text-2xl md:text-3xl text-darkBlack   whitespace-nowrap overflow-hidden border-r-4 border-gray-800 animate-typing">
                    coming soon...
                </h1>
            </div>
    </div>
   
  );
};

export default Blog;
