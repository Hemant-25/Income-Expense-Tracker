import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/layout'
import Orb from './components/Orb/orb'
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income'

import Expenses from './components/Expenses/Expenses';
import Transactions from './components/Transactions/Transactions'

import Navigation from "./components/Navigations/Navigation";
function App() {
  const [active, setActive] = useState(1)
  
  
  
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <Appstyled bg={bg} className="App">

    {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
        {displayData()}
        </main>
        
      </MainLayout>
    </Appstyled>
  );
}

const Appstyled=styled.div`
height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid ###FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }


`;
export default App;
