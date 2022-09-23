import React, {Component} from 'react';

class EventClass extends Component {
    
    constructor(props){
        super(props);

        this.printConsole = this.printConsole.bind(this);
    }
    printConsole() {
        console.log("printConsole");
        console.log(this);
    }
    //bind바인드 형식을 쓰기 싫으면 화살표함수
    printConsole2 = () => {
        console.log("printConsole2");
        console.log(this);
    }
    sendParameter = () => {
        this.printConsole('2')
    }
    
    render() {
        return (
            <div>

                <button onClick={() => {this.printConsole('2')}}>printConsole</button>
                                {/* 화살표함수로 나타내기 */}
                <button onClick={this.sendParameter}>printConsole인자보내기</button>

                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass;