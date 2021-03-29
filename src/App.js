import React from 'react'
//assets
import background from './assets/images/background.jpg'
import './App.css';
//local components
import PageTitle from './components/PageTitle'
import UserInfo from './components/UserInfo'
//actions
import { connect } from "react-redux";
import { getUsers, getBars, getHighWay, getCaves } from "./redux/actions";

function App(props) {

  const { users, bars } = props

  React.useEffect( ()=>{
    props.getUsers()
    props.getBars()
    props.getHighWay()
    props.getCaves()
  },[])

  return (
    <div className="App" style={{
        padding:90, 
        background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}  >
        <PageTitle title={"APOCALYPSE CITY"} />
        <br/>
        {
          users &&  Array.isArray(users) && users.map( user => {
              return(
                <React.Fragment>
                  <UserInfo user={user} bars={bars.filter( bar => bar.user  == user.id )}  />
                  <br/>
                </React.Fragment>                
              )
          })
        }        
    </div>
  );
}

const mapStateToProps = (state) => {

  const { users, bars } = state 

  //console.log("state",state)

	return {
    users,
    bars,
	};
};


export default connect(mapStateToProps, { getUsers, getBars, getHighWay, getCaves })(App);
