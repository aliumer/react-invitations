import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddInvitation: React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
    name: "", age: "", url: "", note: ""
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input, 
      [event.target.name]: event.target.value
    })

   
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      alert('Please enter missing fields.');
      return;
    } else {
      setPeople([
        ...people, {
          name: input.name, 
          age: parseInt(input.age), 
          url: input.url, 
          note: input.note
        }
      ])
      setInput({
        name: "",
        age: "",
        url: "",
        note: ""
      })
    }
  }

  return (
    <div className='AddToList'>
      <input value={input.name} name="name" onChange={handleOnChange} type="text" placeholder='Name' className='AddToList-input'/>
      <input value={input.age} name="age" onChange={handleOnChange} type="text" placeholder='Age' className='AddToList-input'/>
      <input value={input.url} name="url" onChange={handleOnChange} type="text" placeholder='Image Url' className='AddToList-input'/>
      <textarea value={input.note} name="note" onChange={handleOnChange} placeholder='Note' className='AddToList-input'/>
      <button className='AddToList-btn' onClick={handleClick}>
        Add to invitation list
      </button>
    </div>
  )
}

export default AddInvitation