import React,{useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello, world</h1>
      <FuncComp
        initNumber = {2}
      />
      <ClassComp
        initNumber = {2}
      />
    </div>
  );
}

function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date,setDate] = useState((new Date()).toString());

  return(
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date} </p>
      <input
        type='button'
        value="random"
        onClick={
          () => setNumber(Math.random())
        }
      />
      <input
        type='button'
        value="date"
        onClick={
          () => setDate((new Date()).toString())
        }
      />
    </div>
  )
}

class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date : (new Date()).toString()
  }
  render(){
    return(
      <div className='container'>
        <h2>class style component</h2>
        <p>Number:{this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input 
          type='button' 
          value="random"
          onClick={() =>{
            this.setState({number:Math.random()})
          }}
          />
          <input 
          type='button' 
          value="date"
          onClick={() =>{
            this.setState({date:(new Date()).toString()})
          }}
          />
      </div>
    )
  }
}

export default App;
