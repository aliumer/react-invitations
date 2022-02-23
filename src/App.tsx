import React, { useState } from 'react';
import './App.css';
import AddInvitation from './components/AddInvitation';
import InvitationList from './components/invitationList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

const [people, setPeople] = useState<IState["people"]>([
  {
    name: "LeBorn James",
    age: 34,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Alergic to staying on the same team for more then a season"
  }
]);

people.map((person) => {

  return person;
})

  return (
    <div className="App">
      <h1>List of Guests</h1>
      <InvitationList people={people} />
      <AddInvitation people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
