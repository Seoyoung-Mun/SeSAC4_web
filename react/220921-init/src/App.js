// import logo from './logo.svg';
// import './App.css';

function App() {
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React 문서영천재
    //     </a>
    //   </header>
    const flag = true;
    var name = "";
    if ( flag ) name = "SeSAC";
    else name = "문래";

    const style = {
      backgroundColor : "yellow",
      colr : "blue"
    };

    return (
      <div className="test" style={{
        backgroundColor : "yellow",
        color : "blue"
      }}>
        {name}
        { flag && (<h1>True</h1>)}
      </div>
    )

    // </div>
  // );
}

export default App;
