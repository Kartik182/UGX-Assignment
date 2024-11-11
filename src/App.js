import logo from './logo.svg';
import './App.css';
import Sidepanel from './components/Sidepanel';
import Navbar from './components/Navbar';
import Mainpanel from './components/Mainpanel';

function App() {
  return (
    <div className='main-container'>
      <Sidepanel/>
      <div className='right-leftover-part'>
        <Navbar/>
        <Mainpanel/>
      </div>
    </div>
  );
}

export default App;
