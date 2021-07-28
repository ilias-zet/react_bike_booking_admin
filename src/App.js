import './App.css';
import Header from './Header.js'
import Main from './Main.js'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Main/>
      <div className='footer'>
        <span>Developer:</span><span className='name'>Ilias Zerman</span>
      </div>
    </div>
  );
}

export default App;
