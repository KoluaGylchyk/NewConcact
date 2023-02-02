import React from 'react'
import ContactList from '../../components/ContactList'

const Home = ({allContacts,setAllContacts}) => {
  return (
	 <div className='w-full'>
    <h6 className='text-center gap-2 text-'> CONTACT</h6>
    <ContactList allContacts={allContacts} setAllContacts={setAllContacts}/>

   </div>
  )
}

export default Home