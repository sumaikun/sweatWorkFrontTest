import React from 'react';
import texture from '../../assets/images/blue-black.png'
import federico from '../../assets/images/image-federico.png'
import "./index.css"
//local components
import Stadistics from '../UserStadistics'

function UserInfo(props) {

    const { user, bars } = props

    const [ isActive, setActive ] = React.useState(false)

    return (
        <React.Fragment>    
            <div className="user-info-button"
                style={{ 
                    backgroundImage:`url(${texture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                }}
                onClick={()=>{
                    setActive(!isActive)
                }}
            >
                <div className="user-profile" >            
                    <span style={{  
                        margin: "30px",
                        color: "gray",
                        fontSize: "20px"
                    }} > { user.id } </span>
                    <div style={{width:"100px", height:"100%",
                        backgroundImage:`url(http://localhost:3000/images/${user.pic})`,  backgroundRepeat: "no-repeat",  backgroundSize: "cover",}}>
                    </div>                      
                    <div className="user-name" > {user.name} </div>
                </div>
                <div  className="user-details" style={{display:"flex", alignItems:"center", width:"45%", justifyContent:"space-around"}} >
                    <div style={{color:"gray",fontSize:18}} >{user.bib}</div>
                    <div style={{color:"gray",fontSize:18}} >{user.age}</div>
                    <div style={{color:"gray",fontSize:18}} >{user.gender}</div>
                    <div style={{color:"white",fontSize:25}} >{user.time}</div>
                    <div style={{color:"white",fontSize:25}} >{user.score}</div>
                </div>
            </div>
            <Stadistics  className={`userInfo-accordion ${ isActive ?  "active" : "inactive" }`}  bars={bars} />
        </React.Fragment>
    );
}

export default UserInfo;
