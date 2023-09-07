export default function Card (props) {
    const cardStyle={
        width: "26em",
        position: "absolute",
        top: "50px",
        left: "300px",
        background: "balck",
        border: "solid",  
    }
    const bodyStyle = {
        background: "rgb(240, 245, 245)",
        padding: "5px",
    }
    const titleStyle = {
    background: "rgb(95, 81, 221)",
    color: "white",
    padding: "5px",
    }

    const statusStyle = {
        color: "red", 
         
        }

    return (
        <div className="card-style" style={cardStyle}>
        <div className="card-header">{props.header}</div>
        <div className="card-body" style={bodyStyle}>
            {props.title && (<h4 className="card-title" 
            style={titleStyle}
            >{props.title}</h4>)}

            {props.text && (<p className="card-text">{props.text}</p>)}
            {props.status && (<div id="createStatus" style={statusStyle}> {props.status}</div>)}
            {props.body} 
            
        </div>
    </div>
    );

} 