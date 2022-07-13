
import './App.css';
import ReduxApp from './components/ReduxApp';
import {useSelector} from 'react-redux'


function App() {
  
  const state = useSelector(state => state)
  console.log(state)

  return (
    <>
     
    <div className="App">
    REDUX
    </div>
    <ReduxApp />
    </>
  );
}

export default App;
