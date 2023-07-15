import React,{useState} from 'react';
import "./DatePickerr.css";

const DatePicker = () => {
  const [date,setDate]=useState();

  console.log("Date",date);
    return (
    <div className='main'>
      <h3>Selected Date:{date}</h3>
      <input type="date" onChange={e=>setDate(e.target.value)}/>
    </div>
  );
}

export default DatePicker
