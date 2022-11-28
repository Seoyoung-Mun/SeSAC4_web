import './App.css';
import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux'; 



function App() {

  return (
    <div id="app">
      {/* <Provider store={store}> */}
      {/* state를 관리 할 최상위에 Provider */}
        <h1>number : {} </h1>
        <Box1/>
      {/* </Provider> */}
    </div>
  );
}

const Box1 = () =>{
  console.log('Box1');
  const number = useSelector((state)=> state.number); //일반 js에서의 getState역할
  return (
    <div>
      <h2>Box1 컴포넌트 number : {number} </h2>
      <Box2/>
    </div>
  )
}

const Box2 = () =>{
  console.log('Box2');
  const number = useSelector((state)=> state.number);
  return (
    <div>
      <h3>Box2 컴포넌트 number : {number}</h3>
      <Box3 />
    </div>
  )
}
const Box3 = () =>{
  console.log('Box3');
  const number = useSelector((state)=> state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Box3 컴포넌트 number : {number} </h4>
      <input type="button" value="+" onClick={()=>{dispatch({type:'INCREASE'})}}/>
      <input type="button" value="-" onClick={()=>{dispatch({type:'DECREASE'})}}/>
    </div>
  )
}

export default App;
