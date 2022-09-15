import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Divine';
  const lastName= 'Anesi';
  const gender = 'Male'
  const track = 'Fullstack Developer'

  return (
    <div className="App">
      <h3>Full Name: {firstName} {lastName}</h3>
      <p>My name is {firstName} and my surname is {lastName}</p>
      <p>i am a {gender}</p>
      <p>and Lastly i am a {track}</p>
    </div>
  );
}

export default App;
