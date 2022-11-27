import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleAlert = e => {
    alert(e);
  };
  return (
    <header className="App-header">
     <Profile 
     fullName="Amal Kemly"
     bio="I am a student developper"
     profession="Full Stack js Deveolper"
     handleAlert={handleAlert}
     />

    <img src="src/Profile/imgs/phto.png" alt="" width="200px" />
      </header>

     );
       
}

export default App;
