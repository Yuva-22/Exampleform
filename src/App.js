import './App.css';
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
       <Sidebar />
       <div className='barform'>
            <Navbar />
            <Form />
       </div>
    </div>
  );
}

export default App;
