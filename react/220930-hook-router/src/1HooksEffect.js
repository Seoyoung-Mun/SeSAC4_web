import { useState, useEffect } from "react";

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = (e) => {
        setName( e.target.value );
    }
    const changeCnt = () => {
        setCnt( cnt + 1 );
    }
    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name : ", {name});
    // }, [name]); // 배열자리에 내가 검사하고 싶은 state값을 넣어서 그 값이 바뀔때만 실행
    //아무것도 보내지 않으면 (빈배열을 보내면) 어떤 작업을 해도 실행하지 않음
    //, 없이 빈칸 }) 이면 렌더링할때 한번 실행
    // componentDidUpdate(prevProps, prevState){
    //     if ( prevState.name ! =this.state.name ){
    //         실행
    //     }
    // }

    useEffect(() => {
        console.log( "name1 : ", name );
        return () => {
            console.log("name2 : ", name );//뒷정리함수는 업데이트되기 직전에 실행
        }
    })
    return (
        <div>
            <div>
                <input value ={name} onChange={changeName} />
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    )
}

export default Hook;
    
