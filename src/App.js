import { useSelector } from 'react-redux'
import { selectUser} from "./features/userSlice"
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';


function App() {

  const user = useSelector(selectUser)

  return (

    <div className="App">
 
     <Header/>

     { !user ? 
     ( <Login/>
      
      ) : (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>
      )}
      

    </div>
  );
}

export default App;
