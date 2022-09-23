import React, { Component } from "react";

function Event(){
    function clickEvent(e) {
        console.log( e );
    }

    function aClick(e){
        e.preventDefault(); // 윈도우의 기본동작을 방지하는 코드
        console.log( "aClick" );
        console.log( e );
    }
    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

// 코딩온강좌
// class Event extends Component {
//     state = {
//         message : ""
//     }

//     constructor(props) {
//         super(props);
//         this.eventChange = this.eventChange.bind(this);
//         this.eventClick = this.eventClick.bind(this);
//     }
//     eventChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }
//     eventClick() {
//         alert(this.state.message);
//         this.setState({
//             message: ""
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>리액트의 이벤트!!</h1>

//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="이곳에 입력해보세요."
//                     value={this.state.message}
//                     onChange={this.eventChangeChange}
                    
//                 />

//                 <button onClick={this.eventClick}>클릭</button>
//             </div>
//         );
//     }
// }

export default Event;