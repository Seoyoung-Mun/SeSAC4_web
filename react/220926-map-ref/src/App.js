import React, {useState} from 'react';

function App() {
  const [list, setList] = useState(['test','testing','apple','sesac','animal']);
  
  function filterCheck(){
    let lists = ['test','testing','apple','sesac','animal'];

    let newList = [];
    for (let i = 0; i < lists.length; i++ ){
      if( lists[i].length > 4 ) newList.push(lists[i]);
    }

    newList = lists.filter((value) => {
      return value.length > 4 ;
    })
  }

  function addElement(){
    list.push('s');
    console.log (list);
    setList(list);
  }
  return (
    <div>
      {list}
      <ul>
        {list.map((name,i)=> {
          return <li key={i}>{name}</li>
        })}
      </ul>

      <ul>
        {list.filter((name)=> {
          return name.includes("a");
        })}
      </ul>
      <button onClick={addElement}>버튼</button>
    </div>
  );
}

export default App;
