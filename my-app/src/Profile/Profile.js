import PropTypes from "prop-types"; 
import img from "./imgs/phto.png";
function profile({fullName, bio, profession,handleAlert,children}) {
  let style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    textAlign: "center",
  //  transition: "0.3s",
    width: "400px",
    backgroundColor: "white",
    padding: "30px .30px",
    borderRadius: "10px",
  };
  return (
    
    <div style={style} onClick={()=>handleAlert(fullName)}>
      <h2 style={{ textAlign: "center", color: "blue" }}>{fullName}</h2>
      <h3>{profession}</h3>
      <p>{bio}</p>
    </div>
  );
}
profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};
profile.defaultProps = {
  fullName: "FirstLastName",
  profession: "Job title",
  bio: "Bio",
};
export default profile;