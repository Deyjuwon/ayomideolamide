import Header from '../components/Header'
import data from '../utils/BirthdayImgs'



const Birthdays = () => {
  return (
    <div>
        <div className='heading'>
            <Header color='text-gray-400' />
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-4'>
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

export default Birthdays
