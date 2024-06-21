import Header from "../components/Header"
import data from '../utils/SportImgs'



const Sports = () => {
  return (
    <div>
      <Header color='text-gray-400' logoColor='text-black' />
      <div className='grid grid-cols-3 gap-4'>
        {
            data.map((item, idx) => {
                return (
                    <div key={idx}> 
                        <img src={item.imgUrl} alt="" />
                    </div>
                )
            })
        }
      
        </div>
      
    </div>
  )
}

export default Sports
