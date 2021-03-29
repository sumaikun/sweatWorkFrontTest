import React from 'react';
import "./index.css"

const Circle = (props) => {
    const { size,bgColor,color, margin } = props
    return(
        <div style={{  background: bgColor,
            width: size,
            height: size,
            borderRadius: "100%",
            color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"}} >
                { props.children }
        </div>
    )
}

const MiniLines = (props) => {
    const { width, backgroundColor } = props
    return(
        <div style={{   
            width,
            backgroundColor,
            height:2,
            margin:1
        }} />
    )
}

function Stats(props) {   

    return (
    <React.Fragment>
        <div>
            <h2 style={{color:"#3965ad",textAlign:"left",marginLeft:20}}>{props.title}</h2>
        </div>
        
        {
            props.annotations?.map( annotation =>  
            <div className="annotation-container">
                <div className="annotation-title" >
                    <Circle size="30px"  bgColor="black" color="white" >{ annotation.id }</Circle>
                    <div style={{fontWeight:"bold", marginLeft:30 }} > { annotation.label } </div>
                </div>
                <div className="annotation-details" >
                    <div  className="circle-details"
                         style={{ display:"flex", alignItems: "center", justifyContent:"space-evenly", width:"10em"}}>
                        { annotation.abbrs?.includes("P") && <Circle size="25px"  bgColor="#828284" color="white" ><span style={{fontWeight:"bold"}} >P</span></Circle> ||  <Circle size="25px"  bgColor="#dfdfdf" color="#dfdfdf" >P</Circle> }
                        { annotation.abbrs?.includes("R") && <Circle size="25px"  bgColor="#828284" color="white" ><span style={{fontWeight:"bold"}} >R</span></Circle> ||  <Circle size="25px"  bgColor="#dfdfdf" color="#dfdfdf" >R</Circle> }
                        { annotation.abbrs?.includes("W") && <Circle size="25px"  bgColor="#828284" color="white" ><span style={{fontWeight:"bold"}} >W</span></Circle> ||  <Circle size="25px"  bgColor="#dfdfdf" color="#dfdfdf" >W</Circle> }
                        { annotation.abbrs?.includes("F") && <Circle size="25px"  bgColor="#828284" color="white" ><span style={{fontWeight:"bold"}} >F</span></Circle> ||  <Circle size="25px"  bgColor="#dfdfdf" color="#dfdfdf" >F</Circle> }
                    </div>
                    <div 
                        className="bars-details"
                        style={{     
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width:"50px"
                        }} 
                    >
                        { props.bars.map( bar => <MiniLines width={`${bar.percent}%`} backgroundColor={`${bar.color}`} /> ) }
                        
                    </div>
                    <div
                        className="bars-details"
                        style={{
                        borderStyle: "dotted",
                        width: "180px",
                        borderTop: "none",
                        borderBottom: "none",
                        borderColor: "gray"}}  >
                        { annotation.time }
                    </div>
                    <div
                        className="bars-details" 
                        style={{
                        marginRight:40,
                        color: "#5e5e94",
                        fontWeight: 800
                    }} >{ annotation.qualification }</div>
                </div>
            </div>
        )}
        


    </React.Fragment>
    );
}
  
export default Stats;