import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import store from "./Redux/Store";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import EditStudent from "./Components/EditStudent";
import SingleStudentInfo from "./Components/SingleStudentInfo";
import RegisterNewStudent from "./Components/RegisterNewStudent";
import AllStudentInformation from "./Components/AllStudentInformation";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/single_stu_info/:id" component={SingleStudentInfo} />
          <Route path="/all_information" component={AllStudentInformation} />
          <Route path="/register_student" component={RegisterNewStudent} />
          <Route path="/edit_student/:id" component={EditStudent} />
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
