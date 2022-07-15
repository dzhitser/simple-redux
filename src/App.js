import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Post from './components/Post';
//import ReduxApp from './components/ReduxApp';
import { loadPost } from './store/reducers';


// function fetchPostData(){
//   fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => {
//         dispatch(loadPost(data));
//     })
// }

const fetchPost = () => async (dispatch) =>{

  //dispatch({type:LOAD_POST});
 

  try {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch(loadPost(data));
    })
      
  } catch (error) {
      dispatch({
          type:'LOAD_POST_ERROR',
          payload:error
      });
  }

}








function App() {

  const dispatch = useDispatch()
  const newState = useSelector(state => state.post.data)

  
  
  console.log(newState)
  
  return (
    <>
    <h2 className="App">
          юзаем простой REDUX
    </h2>

          <div className="App">
            <button onClick={()=>dispatch(fetchPost())}>Получить JSON c сервера</button>
          </div> 

          <Post data={newState}/>
    </>
  );
}

export default App;
