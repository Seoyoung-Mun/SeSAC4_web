import { useState, useMemo, useCallback, useEffect, useRef } from "react";

function getAverage(list) {
    console.log("getAverage");
    let sum = 0; //const에서 var로 바꾸니까 등록이 실행됌..!!! 머야!!
    if (list.length == 0) return sum;
    for (let i = 0; i < list.length; i++ ){
        sum = sum + list[i];
    }
    return sum / list.length;
}

const Memo = () => {
    console.log( "memo");
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef(null); //초기값(null)을 보낼 수 있다. 안보내도된다

    //Memo
    // const onChange = e => {
    //     setNum( e.target.value );
    // }
    //Callback
    const onChange = useCallback(e => {
        setNum( e.target.value );
    },[]);

    //일반함수
    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0);
    // }
    //Callback
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum("");
        input.current.focus(); //ref사용
    },[num, list]); // 조건에 num을 빼면, 계속 0이 됨. num이 바ㅅ

    
    //const avg = useMemo(()=> getAverage(list), [list]);
    const [avg, setAvg] = useState(0);
    useEffect(()=> {
        setAvg(getAverage(list));
    }, [list]);
    return (
        <div>
            <input value={num} onChange={onChange} ref={input}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i)=> {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    )
}

export default Memo;