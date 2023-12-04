import  {useState} from 'react'

export default function List({contacts}) {
  const [filtertext,setfiltertext]=useState('');

  const filtered=contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
         item[key]
        .toString()
        .toLowerCase()
        .includes(filtertext.toLocaleLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>

       <input placeholder='Filter contact'  value={filtertext} onChange={(e)=>setfiltertext(e.target.value)}/>

      <ul className='list'>
      {
      contacts.map((contact,i) => <li key={i}>

        <span> {contact.fullname} </span>
         
         <span> {contact.phone} </span>
      
      
    </li>)
      }
      </ul>
      <p>Total Contacts (
        {
          filtered.length
        })
      </p>

    </div>
  )
}
