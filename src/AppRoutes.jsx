import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';


export function AppRoutes(){
  return(
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  )
};
