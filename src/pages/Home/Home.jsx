import React from 'react'
import ContactList from '../../components/ContactList'

const Home = ({allContacts,setAllContacts}) => {
  return (
	 <div className=''>
    <h6 className='justify-items-center'> CONTACT</h6>
    <ContactList allContacts={allContacts} setAllContacts={setAllContacts}/>

   </div>
  )
}

export default Home