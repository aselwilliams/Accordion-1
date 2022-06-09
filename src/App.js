import Question from './Question';
import './App.css';
import data from './data'

function App() {
  const [questions, setQuestions] =useState(data)
  return (
    <div className="container">
      <header>
        <h1>Questons and answers about login</h1>
      </header>
      <section>
        {questions.map((question)=>{
          return (
            <Question key={question.id} {...question} />
          )
        })}
      </section>    
    </div>
  );
}

export default App;
