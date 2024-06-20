import Header from "../components/Header";
import data from '../utils/BirthdayImgs';

const Weddings = () => {
  return (
    <div className="">
      <Header color='text-gray-400' logoColor='text-black' />
      <div>
        <h1 className="text-center text-2xl mb-10">WEDDINGS</h1>
        <div className='grid grid-cols-3 gap-10'> 
          {
            data.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <img src={item.imgUrl} className='h-full object-cover' loading='lazy' alt={item.text} />
              </div>
            ))
          }
          <div className="flex flex-col space-y-10">
            {
              data.slice(3, 6).map((item, idx) => (
                <div key={idx} className="flex h-1/2 flex-col">
                  <img src={item.imgUrl} className='h-full object-cover' loading='lazy' alt={item.text} />
                </div>
              ))
            }
          </div>
          {
            data.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <img src={item.imgUrl} className='h-full object-cover' loading='lazy' alt={item.text} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Weddings;
 