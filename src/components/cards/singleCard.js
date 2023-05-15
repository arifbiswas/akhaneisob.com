const SingleCard = ({site}) => {
  
   
    return (
        <div className='bg-green-700 h-[96] rounded-lg'>
            <div className=''>
             <img src={site?.img} alt={site?.name} className='w-full h-52 bg-cover rounded-t-lg' />
            </div>
            <div className=''>
              <div className='flex flex-col items-center justify-between p-4'>
                <h2 className='text-xl font-bold text-white'>{site?.name}</h2>
                <p className='text-gray-200 text-center my-1'>{site?.description}</p>
                <a className='w-full bg-green-800 text-center hover:bg-green-900 p-2 mt-3 text-gray-300 hover:text-gray-100 transition-all duration-200' href={site?.url}>View Details</a>
              </div>
            </div>
        </div>
    );
};

export default SingleCard;