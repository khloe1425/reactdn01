import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import CarShop from './Props/CarShop/CarShop';
import ExerciseCart from './Props/BTCart/ExerciseCart';

// JSX
function App() {
  return (
    <div className="App">
      <ExerciseCart/>
      {/* <CarShop/> */}
      {/* <BTXemChiTiet/> */}
      {/* <HomePage/> */}
      {/* <RenderWithArray/> */}
      {/* <BaiTapChonXe/> */}
      {/* <ChangeFontSize/> */}
      
      {/* <StateDemo/> */}
      {/* <HandleEvent/> */}
      {/* <StyleComponent/>
      <p className="text fontText">AppComponent</p> */}
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
