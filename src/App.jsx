import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
// import Counter from "./components/Counter";

import MyComponentClass from "./components/MyComponentClass";
import MyComponent from "./components/MyComponent";
import UseMemoUseCallabck from "./components/UseMemoUseCallback/UseMemoUseCallabck";
import Counter from "./components/UseReducer/Counter";
import ComplexCounter from "./components/UseReducer/ComplexCounter";
import CounterThree from "./components/UseReducer/CoounterThree";
import LayoutComponent from "./components/CustomeHooks/LayoutComponent";
import LayoutComponentTwo from "./components/CustomeHooks/LayoutComponentTwo";

function App() {
  return (
    <div>
      {/* <Todo></Todo> */}
      {/* <Counter></Counter> */}
      {/* <MyComponentClass></MyComponentClass> */}
      {/* <MyComponent></MyComponent> */}
      {/* <UseMemoUseCallabck></UseMemoUseCallabck> */}
      {/* <Counter></Counter> */}
      {/* <ComplexCounter></ComplexCounter> */}
      {/* <CounterThree></CounterThree> */}
      <LayoutComponent></LayoutComponent>
      <LayoutComponentTwo></LayoutComponentTwo>
    </div>
  );
}

export default App;
