import texture from '../../assets/images/texture.png'
import "./index.css"


function PageTitle(props) {
  return (
    <div style={{ background: `url(${texture})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
      <div style={{padding:"30px", textAlign:"left"}} >
        <h1 className="app-title" >{ props.title }</h1>
      </div>
    </div>
  );
}

export default PageTitle;
