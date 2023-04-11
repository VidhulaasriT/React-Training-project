import "./Section1.css";
import homelogo from "./land-img.svg";
function Section1() {
  return (
    <div className="textArea">
      <h1 className="text1">Build your dream property with</h1>
      <h1 className="text12">New Experience </h1>
      <p className="para1">
        {" "}
        "Your satisfaction is our top priority at every stage of the
        construction process"
      </p>
      <img id="banner" src={homelogo} alt="logo" />
    </div>
  );
}

export default Section1;
