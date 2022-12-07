import React, {useState} from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux'; 


type AppProps = {
  name: string;
  age?: number; 
}
function App(props: {name:string}) {
  const [list, setList] = useState<number[]>([]);
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;
