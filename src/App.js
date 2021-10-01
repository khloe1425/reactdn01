import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './StyleComponent/StyleComponent';

// JSX
function App() {
  return (
    <div className="App">
      <StyleComponent/>
      <p className="text fontText">AppComponent</p>
      {/* <DataBinding/> */}
      
      {/* <HomeComponent/> */}
      
      {/* <h1>Hello React</h1> */}
      {/* sử dụng component
      pascal case
       */}
      {/* <FunctionComponent />
      <FunctionComponent />
      <FunctionComponent></FunctionComponent>
       <ClassComponent/> */}

       
    </div>


  );
}

export default App;
