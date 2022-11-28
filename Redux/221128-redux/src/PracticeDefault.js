import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PracticeDefault() {
  const balance = useSelector((state)=> state.balance);
  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {balance} 원</h3>
      <Button />
    </div>
  )
}

function Button() {

  const input = useRef();
  const dispatch = useDispatch();

  function deposit() {
    console.log(input.current);
    dispatch({type: 'DEPOSIT', balance: input.current.value});
  };

  function withdraw() {
    dispatch({type: 'WITHDRAW', balance: input.current.value});
  }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <input type="text" ref={input}/>
      <button onClick={deposit}>입금</button>
      <button onClick={withdraw}>출금</button>
    </div>
  )
}


export default PracticeDefault;