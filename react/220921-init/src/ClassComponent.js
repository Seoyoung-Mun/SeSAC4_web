import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Class형에서는 this를 앞에 붙여
class ClassComponent extends Component {
    render(){
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent -function</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.location}</h5> 
            </div>
        );
    }
    //클래스형에서는 타입설정을 밖이 아닌 안에도 작성할 수 있음
    static propTypes = {
        name: PropTypes.string
    }
}

// 함수형
// function ClassComponent (props){
//     const {name, location} = props;
//     return (
//         <div>
//             {props.children}
//             <h2>ClassComponent -function</h2>
//             <h5>name : {name}</h5>
//             <h5>location : {props.location}</h5> 
//             {/* 부모가 전달한? name,location props.name/props.location */}
//             {/* 부모는 어디에있는가? 내가 ClassComponent태그를 지정한 그 위치에서 데이터를 전달하고 여기서 받는것임. */}
//         </div>
//     )
// }

// 부모에서 전달 받은 값이 없을때 기본값으로 설정하기
ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치',
}
// 타입을 설정 , 타입 검사
ClassComponent.propTypes = {
    name: PropTypes.string
}
export default ClassComponent;