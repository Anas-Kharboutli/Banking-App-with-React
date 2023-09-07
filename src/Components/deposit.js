import Card from './context';
import { React, useState, useContext } from 'react';
import { UserContext } from './Routes';

export default function Deposit () {

    const ctx = useContext(UserContext);
   
    const [name, setName] = useState(ctx.users[0].name);
    const [deposit, setDeposit] = useState(0);
    const [balance, setBalance] = useState(ctx.users[0].balance);
    const [warning,setWarning] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [show, setShow] = useState(true);

    const isValidDeposit = (amount) => amount > 0;
    const isValidAmount = (amount) => amount <= 1000;
    
    function handleDeposit() {
      if(!isValidDeposit(deposit)) {
        setWarning("Your deposit amount must be greater than $0");
        setTimeout(() => setWarning(""), 3000)
        return;
      }
      if(!isValidAmount(deposit)) {
        setWarning("You cannot exceed $1000 limit per deposit.");
        setTimeout(() => setWarning(""), 3000)
        return;
      }
      setBalance(ctx.users[0].balance += deposit);
      setShow(false);
      return;
    }

    function reset () {
        setDeposit(0);
        setShow(true);
    }

    return (
        <Card
        title="Deposit Page"
        status={warning}
        body={ 
            show? (
                <>    
        <div style={{fontWeight:"bold"}}> Account name: {name} </div>
        <div style={{fontWeight:"bold"}}>Balance: ${balance}</div> 
        <br/>

        Deposit
        <input 
          type="number"
          className="form-control"
          id="deposit"
          placeholder="Deposit Amount"
          value={deposit}
          onChange={e => {
            setDeposit(parseFloat(e.currentTarget.value));
            e.currentTarget.value < 0 ? setBtnDisable(true) : setBtnDisable(false);  
            }} /><br />
        
        <button type="submit" 
        class="btn btn-primary mb-3" 
        id="submit"
        onClick={handleDeposit}
        disabled={btnDisable}
        
        >Deposit</button>
        </>
            ):(
                <>
                <br/>
                <h5 style={{color: "green"}}>Deposit Successful !</h5>
                
                <h4> Your balance now is: ${balance}</h4>
                
                <button type="submit" 
                class="btn btn-primary mb-3" 
                onClick={reset}
                >Make New Deposit</button>
                </>
            )
     }/>     
    );
}