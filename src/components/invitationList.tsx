import React from 'react';
import { IState as IProps } from '../App';


const InvitationList: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img className='List-img' src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note} </p>
        </li>
      )
    })
  }


  return (
    <div>
      <a href="https://www.youtube.com/watch?v=jrKcJxF0lAU">Course</a>
      <ul>
        {
          renderList()
        }
      </ul>
    </div>
  )
}

export default InvitationList;