import React,{useState} from 'react';
import {FiPlus, FiMinus} from 'react-icons/fi'

function Question({question}) {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <article className='question'>
        <header className='q-header'>
            <h3>{question.title}</h3>
        
        <button className='icon' onClick={()=>setShowAnswer(!showAnswer)}>
            {showAnswer ? <FiMinus /> :  <FiPlus />}
        </button>
        </header>
        {showAnswer && (<div className='answer'>
            <p>{question.info}</p>
        </div>)}
    </article>
  )
}

export default Question