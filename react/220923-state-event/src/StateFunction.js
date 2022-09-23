import React, {useState} from 'react';

function StateFunction () {
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    //클래스형에서
    //this.state {
        // mas: ""
    //}

    //함수형으로 실행할 때 
    function changeMsg(){
        setMsg("메세지")
        //  클래스형에서의 setState({msg:"메시지"})와 같은 역할
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}
export default StateFunction;