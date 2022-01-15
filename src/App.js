import React,{ Component } from "react";

// class App extends Component {
//   render(){
//     const greeting = "Hi,Shota";
//     const dom = <h1 className ="foo">{greeting}</h1>;
//     HTMLのClassはclassNameとする
//     return dom;
//   }
// }

// class App extends Component {
//   render(){
//     return <input type="text" onChange={() => {console.log("I am clicked")}}/>;
//   }
// }

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked")}}/>;
      </React.Fragment>
    ) 
  }
}

export default App;
