import './App.css';
import Lottie from "lottie-react";
import animationData from "./Animation.json";

import Header from "./Component/Header";
import LeftSection from "./Component/leftSection_animation.jsx";
import RightSection from "./Component/rightSection_login.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LeftSection></LeftSection>
      <RightSection></RightSection>
    </div>
  );
}

export default App;
