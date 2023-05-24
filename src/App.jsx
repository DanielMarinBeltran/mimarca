import { Fragment } from "react";
import "./App.css";
import Form from "./Components/Form";
import logoCRM from "./assets/img/conSEOLogo.png";

function App() {
  return (
    <Fragment>
      <div className="main_container">
        <img className="main--logo" src={logoCRM} alt="conSEO logo" />
        <div className="main-circle__left-top"></div>
        <div className="main-circle__right-top"></div>
        <div className="main-circle__left-bottom"></div>
        <div className="main-circle__right-bottom"></div>
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
