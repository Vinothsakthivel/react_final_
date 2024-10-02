import { Component } from "react";
import "../file/Section.css";


class Section extends Component {
  render() {
    return (
      <div className="position-relative">
        <img id="overlay" src="/images/style.jpg" />
        <h1 className="stylename">Discover Your New Home</h1>
        <h5 className="style1">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;Proin sodales ultrices nulla blandit volutpat.</h5>

        <div className="style2">
        <button className="dropbtn">Rent</button>
        <button className="dropbtn1">Sale</button>
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>Location</h3>
                  <a href="#">Select Your city</a>

                </div>
                <div className="column">
                  <h3>Property type</h3>
                  <a href="#">Select your Property</a>
                </div>
                <div className="column">
                  <h3>Rent Rangee</h3>
                  <a href="#">Select rent range</a>
                </div>
                <div className="column">
                <button className="search1">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}







export default Section;
