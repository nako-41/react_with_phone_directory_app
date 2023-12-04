import React,{useState,useEffect} from 'react';
import './styles.css';
import List from './List/Index';
import Form from './Form/Index';

export default function Contacts() {

  const[contacts,setContacts]=useState([
    {
      fullname:"okan",
      phone:"123123"
    },
    {
      fullname:"asli",
      phone:"4444545"
    }

  ]);

 useEffect(()=>{
console.log(contacts);
 },[contacts])
  
  return (
    <div className="container">
      <h2>Contacts</h2>
    <List contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}
