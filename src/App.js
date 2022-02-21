import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser} from "./features/userSlice"
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgets from './components/Widgets';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {

      if(userAuth) {
             
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,

        }))
      } else {

         dispatch(logout())
      }
    });
  }, [])

  return (

    <div className="App">
 
     <Header/>

     { !user ? 
     ( <Login/>
      
      ) : (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
      

    </div>
  );
}

export default App;
