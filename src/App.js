import React from 'react';

import './App.css';
// import HttpReact from './http/HttpReact';
// import HttpPost from './http/HttpPost';
// import GetFetch from './http/GetFetch';
import PostFetch from './http/PostFetch';
import Fragments from './Fragments/Fragments';
import Hoc from './HOC/Hoc';
import HoverCounter from './HOC/HoverCounter';

// import Unmounting from './LifeCycles/Unmounting';
// import ReactForm from './Forms/ReactForms';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import PropHello from './props/PropHello';
// import PropsWelcome from './props/Propswelcome';
// //import welcome from './components/welcome';
// import Statewelcome from './state/Statewelcome';
// import EventFunction from './Events/EventFunction';
// import EventClass from './Events/EventClass';
// import EventBind from './Events/EventBind';
// import IfElse from './conditionalRendering/IfElse';
// import ElementVariable from './conditionalRendering/ElementVariable';
// import Ternary from './conditionalRendering/Ternary';
// import ShortCircuit from './conditionalRendering/ShortCircuit';
// import NameList from './List Rendering/NameList';
// import MountingLifecycle from './LifeCycles/MountingLifecycle';
// import Updatinglifecycle from './LifeCycles/Updatinglifecycle';


function App() {
  return (
    <div className="App">
      <Hoc />
      <HoverCounter />
    {/* <Fragments /> */}
        {/* <PostFetch /> */}
      {/* <GetFetch /> */}
      {/* <HttpPost /> */}
      {/* <HttpReact /> */}
    {/* <ReactForm /> */}
      {/* <Unmounting /> */}

    {/* <Updatinglifecycle favcol="yellow"/> */}

      {/* <MountingLifecycle favtColor="green" /> */}
      {/* <NameList /> */}
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello /> */}
      {/* <PropHello name="Ashwini">
        <p>Software Engineer</p>
      </PropHello>
      <PropsWelcome name="Avira"/>
      <Statewelcome /> */}
      {/* <EventFunction />
      <EventClass /> */}
      {/* <EventBind /> */}
      
      {/* <IfElse /> */}
      {/* <ElementVariable /> */}
      {/* <Ternary /> */}

      {/* <ShortCircuit /> */}


    </div>
  );
}

export default App;
