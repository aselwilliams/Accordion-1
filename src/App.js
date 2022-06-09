import Question from './Question';
import './App.css';
import data from './data';
import {useState} from 'react';

function App() {
  const [questions, setQuestions] =useState(data)
  return (
    <main>
    <div className="container">
      <header  className='title'>
        <h1>Questons and answers about login</h1>
      </header>
      <section className='box'>
        {questions.map((question)=>{
          return (
            <Question key={question.id} question={question} />
          )
        })}
      </section>    
    </div>
    </main>
  );
}

export default App;
