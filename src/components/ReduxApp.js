import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { userPostSelector } from '../store';
import { loadPost } from '../store/reducers';
import Post from './Post';




function fetchPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // .then(json => console.log(json))
}




const fetchPost = () => async (dispatch) =>{

    dispatch({type:LOAD_POST_SUCCESS});
   

    try {

        const response = await fetchPostData()
        console.log(response)
        
        dispatch({
            type:'LOAD_POST_SUCCESS',
            payload:response
        });
        
    } catch (error) {
        dispatch({
            type:'LOAD_POST_ERROR',
            payload:error
        });
    }

}




// export const ReduxApp = () => {

//     useEffect(()=>{
//         dispatch(fetchPost())
//     }, [])


//     return (
//         <div>
//             REDUX
//             {/* <Post description={me.}/> */}

           
//         </div>
//     );
// };

