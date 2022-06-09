import React,{useState} from 'react';
import {FiPlus, FiMinus} from 'react-icons/fi'

function Question({question}) {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <article className='question'>
        <header>
            <h3>{question.title}</h3>
        </header>
        <button className='icon'>
            {showAnswer ? <FiMinus /> :  <FiPlus />}
        </button>
        {showAnswer && (<div>
            <p>{question.info}</p>
        </div>)}
    </article>
  )
}

export default Question