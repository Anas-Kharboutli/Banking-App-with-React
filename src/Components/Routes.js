import { Routes, Route} from "react-router-dom";
import { createContext, useState } from 'react';

import Home from './home';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import NewAccount from "./newAccount";

export  const UserContext = createContext(null);

export default function PageRouting () {
    
    return (   
        <UserContext.Provider value={{users: [{name: 'X',email: 'luckyowner@badbank.com',password: 'TopSecret',balance: 0}]}}>
     <Routes>
        <Route path="/" exact  element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/newAccount" element={<NewAccount/>}></Route>
        <Route path="/deposit" element={<Deposit/>}></Route>
        <Route path="/withdraw" element={<Withdraw/>}></Route>
        <Route path="/alldata" element={<AllData/>}></Route>      
     </Routes> 
     </UserContext.Provider>      
    );
}
