// import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav'
import Flashcards from './components/Flashcards'


function App() {
  return (
    <div className="app-container">
      <SideNav />
      <div className="app-content">
        <Flashcards />
      </div>
      {/* <Header /> */}
    </div>
  );
}

export default App;
