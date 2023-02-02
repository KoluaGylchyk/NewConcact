import React from 'react'

const Modal = ({children,isOpen}) => {
  return (
	<div className={`${isOpen?" z-50  block fixed inset-0 bg-red-500 transition":"hidden"}`}>
	
	{children}
	

 </div>
  )
}

export default Modal