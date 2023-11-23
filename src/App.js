import logo from './logo.svg';
import './App.css';
import { NavMain,NavTools } from './components/Navigation'

function App(props) {

  var app;
  var navTools;
  if(props.page!=null){
    if(props.page=="structure"){
      navTools = <NavTools page={props.page}/>
    }
  }
  else{
    navTools=(<NavTools/>)
  }

  return (
    <div className="App">
      {/* <NavMain/> */}
      {navTools}
    </div>
  );
}

export default App;
