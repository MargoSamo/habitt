import React from 'react';
import {Habit} from "./components/Habit"
import {habits} from "./data/habits"

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5"> 

    { habits.map(habit => <Habit habit={habit} key={habit.id} />) }

    </div>
  )
}

export default App;
