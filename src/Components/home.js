import { Link } from 'react-router-dom';
import Card from './context';

export default function Home () {
      return (
        
        <Card 
        
        title="Welcome to BadBank"
        text="Ready to check it out ? "
        body={
          <>
          <button 
          type="submit" 
          class="btn btn-primary mb-3" 
          ><Link style={{color: "white"}} to="/newAccount/">Get Started</Link></button>
          
          <img src={require('./images/1679923530-8258.avif')} className="img-fluid"
        alt="Responsive Img"/>
         </>
        }>
        </Card>
        
      );
  }