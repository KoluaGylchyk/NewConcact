import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({allContacts, setAllContacts}) => {
  return (
	 <div>
		{allContacts.map((item)=>(
			<ContactItem item={item} key={item.id} allContacts={allContacts} />
		))}
	 </div>
  )
}

export default ContactList