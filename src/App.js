import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import styled from "styled-components";
import TopBar from "./view/TopBar";
import Links from "./view/Link"
import {Users,CreateUser,GetUserById,UpdateUser,DeleteUser} from './view/Users'
const  App = () =>  (
 
       <Router>
       <Box>
         <TopBar>
           <Links />
         </TopBar>
         <Switch>
           <Route exact path="/" component={Users} />
           <Route exact path="/CreateUser" component={CreateUser} />
           <Route exact path="/getUserById" component={GetUserById} />
           <Route exact path="/updateUser" component={UpdateUser} />
           <Route exact path="/DeleteUser" component={DeleteUser} />
           
         </Switch>
       </Box>
     </Router>
  
  );

export default App;


const Box = styled.div`
  /* background: lightskyblue; */
  padding: 3rem 7.5rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;
