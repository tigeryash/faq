import './App.css';
import {qa} from './data.js'
import Accordian from './Accordian';


function App() {

  const accordianElements = qa.map((element, idx) => (
    <Accordian key={idx} element={element} idx={idx} />
  ))

  return (
    <div className="App">
     
     
      <main>
        <div className='test'>
          <img className='illustration' src='images/illustration-woman-online-mobile.svg' alt='illustration'/>
          <div className='over'>
            <img className='desktop' src='images/illustration-woman-online-desktop.svg' alt='illustration' />
            <img className='pat' src='images/bg-pattern-desktop.svg' alt='shadow'/>
          </div>
          <img className='pattern' src="images/bg-pattern-mobile.svg" alt='pattern'/>
        </div>

        <div className='info'>
          <h1>FAQ</h1>
          {accordianElements}
        </div>

      </main>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/tigeryash">Yash</a>.
        </div>
      
    </div>
  );
}

export default App;
