/* eslint-disable react/prop-types */

const TestimonialCard = (props) => {
  return (
    <div className="mt-10 after:py-4 px-4 h-72 w-56 rounded-lg shadow-2xl text-sm flex gap-3 flex-col items-center">
        <img src={props.imgUrl} className='rounded-full h-14 w-14 object-cover' alt="" />
        <div className='flex flex-col justify-center items-center'>
            <p className="">{props.name}</p>
            <p className="text-gray-400">{props.position}</p>

        </div>
    
        <p className='text-xs text-center'>{props.testimony}</p>

      
    </div>
  )
}

export default TestimonialCard
