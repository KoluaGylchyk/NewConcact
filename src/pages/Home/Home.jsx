import React from 'react'
import ContactList from '../../components/ContactList'

const Home = ({allContacts,setAllContacts}) => {
  return (
	 <div>
    <h6> CONTACT</h6>
    <ContactList allContacts={allContacts} setAllContacts={setAllContacts}/>

   </div>
  )
}

export default Home