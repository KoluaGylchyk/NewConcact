import React from 'react'

const MyButton = ({title,...props}) => {
	return (
		<>
		  <div
	  
			 className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
		  >
			 <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black  opacity-[3%]"></span>
			 <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			 <button  className="relative w-full text-left text-black transition-colors duration-200 ease-in-out">
				{title}
			 </button>
			 <button {...props} className="absolute inset-0 border-2 border-white rounded-full"></button>
		  </div>
		</>
	 );
}

export default MyButton