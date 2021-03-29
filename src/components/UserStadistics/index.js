import { connect } from "react-redux";

import Bars from "./.components/Bars"
import Stats from "./.components/Stats"

function UserStadistics(props) {

    const { bars, highwayStats, caveStats } = props

    return (
        <div  className={props.className}
          style={{ backgroundColor:"rgba(220,220,220,0.9)", width:"90%", float:"right", marginBottom:10 }} >
              { bars && Array.isArray(bars) && bars.map( bar => <Bars bar={bar} /> ) }       
            <br/>
            <Stats bars={bars} annotations={highwayStats} title="Post Apocalyptic Highway" />
            <Stats bars={bars} annotations={caveStats} title="Costa Rican Caves" />
        </div>
    );
}


  const mapStateToProps = (state) => {

    const { highwayStats, caveStats } = state 
  
    //console.log("state",state)
  
    return {
        highwayStats, caveStats
    };
};
  
  
export default connect(mapStateToProps, {})(UserStadistics);

  