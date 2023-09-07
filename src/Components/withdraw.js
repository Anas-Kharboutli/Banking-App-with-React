import Card from './context';
import { useState, useContext } from 'react';
import { UserContext } from './Routes';

export default function Withdraw () {

    const ctx = useContext(UserContext);
   
    const [withdraw, setWithdraw] = useState(0);
    const [name, setName] = useState(ctx.users[0].name);
    const [balance, setBalance] = useState(ctx.users[0].balance);
    const [warning,setWarning] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [show, setShow] = useState(true);

    const isValidWithdraw = (amount) => amount > 0;
    const isBalanceExceeded = (amount) => amount > balance;

    function handleWithdraw(){
      if (!isValidWithdraw(withdraw)) {
        setWarning("Your withdrawal must be greater than $0"); 
        setTimeout( () => setWarning(""), 3000)
        return;
    }
      if(isBalanceExceeded(withdraw)) {
        setWarning("Your withdrawal amount cannot exceed your balance !");
        setTimeout(() => setWarning(""), 3000)
        return;
    }
      setBalance(ctx.users[0].balance -= withdraw);
      setShow(false);
      return;
    }

    function reset () {
       setWithdraw(0);
        setShow(true);
    }

    return (
        <Card
        title="Withdraw Page"
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
          id="withdraw"
          placeholder="Withdraw Amount"
          value={withdraw}
          onChange={e => {
            setWithdraw(parseFloat(e.currentTarget.value));
            e.currentTarget.value < 0 ? setBtnDisable(true) : setBtnDisable(false);
            }} /><br />
        
        <button type="submit" 
        class="btn btn-primary mb-3" 
        id="submit"
        onClick={handleWithdraw}
        disabled={btnDisable}
        
        >Withdraw</button>
        </>
            ):(
                <>
                <br/>
                <h5 style={{color: "green"}}>Withdraw Successful !</h5>
                
                <h4> Your balance now is: ${balance}</h4>
                
                <button type="submit" 
                class="btn btn-primary mb-3" 
                onClick={reset}
                >Withdraw Again</button>
                </>
            )
     }/>     
    );
}