import React, { useState } from 'react'
import { habits } from '../data/habits'
import { IHabit } from '../models'

interface HabitProps {
    habit: IHabit

}

export function Habit(props: HabitProps) {
    const[records, setRecords] = useState(false)

    const btnBgClassName = records ? "bg-green-400" : "bg-red-400"

    const btnClasses = ["py-2 px-2 border", btnBgClassName]

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
            >
            {props.habit.historyName}  
            
            {/* <button 
            className={btnClasses.join(' ')}
            onClick={() => setRecords(prev => !prev)}
            >
            {records ? 'ACHIEVED' : 'FAILED'}
            </button>      */}

            <input type="checkbox"  
            onChange={() => setRecords(prev => !prev)}
            
            />          
            
        </div>
    )
}