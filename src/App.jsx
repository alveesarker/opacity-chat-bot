import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Loading from "./components/Loading/Loading";

const App = () => {

  var displayWidth = window.innerWidth;

  const [displayMenu, setDisplayMenu] = useState(false)



  return (
    <>
      <Sidebar displayWidth={displayWidth} setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      <Main setDisplayMenu={setDisplayMenu}/>
    </>
  );
};

export default App;
