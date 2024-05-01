import React from "react";
import './App.css';
import {Header} from "./Components/Header";
import {Balance} from "./Components/Balance";
import { Income } from "./Components/Income";
import { TransactionList } from "./Components/Transactionlist";
import { TransactionAdd } from "./Components/TransactionAdd";
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <TransactionList/>
        <TransactionAdd/>
      </div>
    </GlobalProvider>
  );
}

export default App;
