import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from "@material-ui/core/styles";

function Bars(props) {

    const { bar } = props

    const StyledLinearProgress = withStyles({
        colorPrimary: {
        backgroundColor: "#9a9a9a"
        },
        barColorPrimary: {
        backgroundColor: bar?.color || "white"
        },
    })(LinearProgress);

    return (
      <div style={{padding:"20px 20px 0px"}} >
          <div style={{ display:"flex" }}>
              <span style={{ color:"#6d6666", fontSize:12, width:"200px", textAlign:"initial" }}>{ bar.label }</span>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"left", width:"100%" }} >
                <span style={{ color:"orange", fontSize:12, fontWeight:"bold" }} >{ bar.value }</span>
                <StyledLinearProgress               
                    style={{height:"10px",
                        marginLeft:20,
                        width:"50%"
                    }}
                    variant="determinate" value={bar.percent} />
              </div>
             
          </div>
      </div>
    );
}
  
export default Bars;