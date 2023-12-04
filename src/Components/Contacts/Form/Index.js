import {useState} from 'react'
import  './style.css';


export default function Form({addContact,contacts}) {
const[form,setForm]=useState({fullname:"",phone_number:""})
   
const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
}

const onSubmit=(e)=>{
    e.preventDefault();
    
    if (form.fullname ==="" || form.phone_number ==="") {
        return false;
    }


    addContact([...contacts,form]);
    console.log(form); 
    
}
  return (
    <form onSubmit={onSubmit}>
    <div>
     <input className='inputbox' name="fullname" placeholder='Full Name' onChange={onChangeInput} />
    </div>
    <div>
     <input className='inputbox' name="phone_number" placeholder='Phone Number' onChange={onChangeInput} />
    </div>

    <div className='btn'>
        <button onClick={onSubmit}>Add</button>
    </div>

    </form>
  )
}
