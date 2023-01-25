import React from 'react'

const Modal = ({children,isOpen,setIsOpen}) => {
  return (
	<div className={`${isOpen?" z-50 block fixed inset-0 bg-red-500 transition":"hidden"}`}>
	<button className='border-2 p-2 border-yellow-100 rounded-lg shadow-lg' onClick={setIsOpen}>Close</button>
	{children}
	

 </div>
  )
}

export default Modal