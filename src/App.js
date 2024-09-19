import { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar'
import Body from './component/body/Body';
// import Footer from './component/footer/Footer';
import { Routes, Route, Navigate } from "react-router-dom";
import About from './component/about/About';
import Parent from './component/LernLiftState/Parent';
import UseStateHook from './component/Hooks/UseStateHook'
import UseEffectHook from './component/Hooks/UseEffectHook';
import UseMemoHook from './component/Hooks/UseMemoHook';
import UseCallbackHook from './component/Hooks/UseCallbackHook';
import UseCustomeHook from './component/Hooks/UseCustomeHook';
import Map from './component/feathers/Map';
import ModuleCss from './component/feathers/ModuleCss';
import FormHandler from './component/feathers/FormHandler';
import LifeCycle from './component/feathers/LifeCycle';
import ComponentWill from './component/feathers/ComponentWill';
import ComponentUpdate from './component/feathers/ ComponentUpdate';
import DerivedStFromPr from './component/feathers/DerivedStFromPr';
import SnapshotBeforeUpdate from './component/feathers/SnapshotBeforeUpdate'
import ShouldComUpdate from './component/feathers/ShouldComUpdate';
import Provider from './component/Hooks/UseContext/Provider';
import Receiver from './component/Hooks/UseContext/Receiver';
import UseRef from './component/Hooks/UseRef';
import UseReducer from './component/Hooks/UseReducer';
import UseReducerTodo from './component/Hooks/UseReducerTodo';
import Page404 from './component/ReactRouter/Page404';
import User from './component/ReactRouter/User';
import Filter from './component/ReactRouter/Filter';
import UseNavigate from './component/ReactRouter/UseNavigate';
import Outelet from './component/outlet/Outelet';
import Company from './component/outlet/Company';
import Gov from './component/outlet/Gov';
import WorldGov from './component/outlet/WorldGov';
import UseLocation from './component/ReactRouter/UseLocation';
import Login from './component/Login/Login';
import Protected from './component/Login/Protected';
import Logout from './component/Login/Logout';
import CrudAxios from './component/Axios/CrudAxios';
import ReduxCounter from './React-Redux/ReduxCounter';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const ondelete = (todo) => {
    console.log("i am deleted title:" + todo.title + ";desc:" + todo.desc)
    setTodo(todos.filter((e => {
      return e.sno !== todo.sno
    })))
    // localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addData = (title, desc) => {
    console.log("inside")
    let sno
    todos.length !== 0 ?
      sno = todos[todos.length - 1].sno + 1 : sno = 1;
    const newtodo = ({
      sno: sno,
      title: title,
      desc: desc
    })

    setTodo([...todos, newtodo])


  }

  const getData = (name) => {
    console.log(name)
  }


  const [todos, setTodo] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Navbar title={"vinit"} searchbar={true} />
      <Provider>
        <Routes>
          <Route exact path="/" element={<Protected component={Body} todo={todos} ondelete={ondelete} addData={addData} />} />
          <Route path='/about' element={<About />} />
          <Route path='/lift' element={<Parent onApp={getData} />} />
          <Route path='/usestate' element={<UseStateHook />} />
          <Route path="/useeffect" element={<UseEffectHook />}></Route>
          <Route path="/useMemo" element={<UseMemoHook />}></Route>
          <Route path="/useCallback" element={<UseCallbackHook />}></Route>
          <Route path="/usecontext" element={<Receiver />}></Route>
          <Route path="/useref" element={<UseRef />}></Route>
          <Route path="/custome" element={<UseCustomeHook />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path='/modulecss' element={<ModuleCss />}></Route>
          <Route path='/form' element={<FormHandler />}></Route>
          <Route path='/lifecycle' element={<LifeCycle />}></Route>
          <Route path='/willanmount' element={<ComponentWill />}></Route>
          <Route path='/didupdate' element={<ComponentUpdate />}></Route>
          <Route path='/drivedstpr' element={<DerivedStFromPr />}></Route>
          <Route path="/snapshot" element={<SnapshotBeforeUpdate />}></Route>
          <Route path="/shouldupdate" element={<ShouldComUpdate />}></Route>
          <Route path="/usereducer" element={<UseReducer />}></Route>
          <Route path="/todoreducer" element={<UseReducerTodo />}></Route>
          {/* <Route path="/*" element={<Navigate to="/about" />}></Route> */}
          <Route path="/user/:name" element={<User />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
          <Route path="/navigate" element={<UseNavigate />}></Route>
          <Route path="/outlet/" element={<Outelet />}>
            <Route path="comapny" element={<Company />}></Route>
            <Route path="gov" element={<Gov />}></Route>
            <Route path="worldgov" element={<WorldGov />}></Route>
          </Route>
          <Route path="/uselocation" element={<UseLocation />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/axios" element={<CrudAxios />}></Route>
          <Route path="/redux" element={<ReduxCounter/>}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </Provider>
      {/* <Footer /> */}
    </div >
  );
}

export default App;
