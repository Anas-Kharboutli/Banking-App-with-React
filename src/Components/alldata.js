import Card from "./context";
import { useContext } from "react";
import { UserContext } from "./Routes";

export default function AllData () {
    const ctx = useContext(UserContext);
    return (
        <Card
        header=""
        title="User Information"
        status=""
        body={
            <>
            <div>
            <span><b>Name:</b> {ctx.users[0].name}</span><br/>
            <span><b>E-mail:</b> {ctx.users[0].email}</span><br/>
            <span><b>Password:</b> {ctx.users[0].password}</span><br/>
           <span><b>Current Balance:</b> ${ctx.users[0].balance}</span><br/>
           </div>
            </>
            

        }></Card>

    )
}