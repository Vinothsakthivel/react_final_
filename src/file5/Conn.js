import { Component } from "react";
import "../file5/Conn.css";

class Conn extends Component {
  render() {
    return (
      <div className="backk">
        <div>
          <h3 className="h3aa">| Neighborhood |</h3>
          <h1 className="h1aa">Find Your Neighborhood</h1>
        </div>
        <div className="conta">
        
          <div className="coll">
            <img src="/images/col4/1.png" alt="co" className="im3" />
          </div>
          <div className="colll">
            <img src="/images/col4/2.png" alt="co" className="im3" />
          </div>
          <div className="collll">
            <img src="/images/col4/3.png" alt="co" className="im3" />
          </div>
          <div className="colllll">
            <img src="/images/col4/4.png" alt="co" className="im3" />
          </div>
        </div>
        <div className="but">
            <button className="l"><img src="/images/col4/l.png" alt="ar"/></button>
           <button className="r"><img src="/images/col4/r.png" alt="ar"/></button>
        </div>
      </div>
    );
  }
}

export default Conn;
