import {useReducer} from "react";

const [INCREMENT, DECREMENT] = ['increment', 'decrement'];
const [MIN, MAX] = [1, 10];

const reducer = (state, action) => {

  switch(action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    
    case DECREMENT:
      if(state.count < 1){
        return {count: state.count = 1};
      }
      return {count: state.count - 1};
    
  }
}

const initialState = {count: 0}
export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div>
      <p>Count de 1 à 10: {state.count}</p>
      <button onClick={() => dispatch({type:INCREMENT})} disabled={state.count <= MAX - 1 ? false : true}>Increment</button>
      <button onClick={() => dispatch({type:DECREMENT})} disabled={state.count >= MIN + 1 ? false : true} >Decrement</button>
    </div>
    </>
  )
}
