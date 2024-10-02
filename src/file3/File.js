import { Component } from "react";
import "../file3/File.css";

class File extends Component {
  render() {
    return (
      <div className="back">
        <h3 className="wh">| Why Choose us |</h3>
        <h1 className="h111">Why Choose Our Properties</h1>
        <h1 className="h1111"> Of Real Estate Industries</h1>
        <div className="con1">
          <div className="col1">
            <div className="term">
              <img src="/images/ico1.png" alt="icoimage" />
              <h3>Budget Friendly</h3>
              <p>Distinctively re-engineer revolutionary</p>
              <p> meta-services and premium At vero eos et</p>
              <p>accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              <button className="btn11">Reat more</button>
            </div>
          </div>
          <div className="col2">
            <div className="term1">
              <img src="/images/ico2.png" alt="icoimage" />
              <div>
                <h3>Budget Friendly</h3>
                <p>Distinctively re-engineer revolutionary</p>
                <p> meta-services and premium At vero eos et</p>
                <p>
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                </p>
                <button className="btn111">Reat more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="con2">
        <div className="col3">
          <div className="term2">
            <div>
              <div>
                <img src="/images/col3/3.png" alt="co" className="im" />
                <img src="/images/col3/4.png" alt="coo" className="im1"/>
              </div>
              <div className="cart3">
                    <h3>Trusted By Thousands</h3>
                    <p className="pp">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    <button className="btn11">Reat more</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col4">
          <div className="term3">
            <div>
                <img src="/images/col3/cd2.png" alt="co" className="im2" />
              <div className="cart4">
                    <h3 className="h33">Prime Location</h3>
                    <p className="pp">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis iusto odio dignissimos ducimus qui blanditiis</p>
                    <button className="btn11">Reat more</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col5">
          <div className="term4">
            <div>
                <img src="/images/col3/cd3.png" alt="co" className="im3" />
              <div className="cart5">
                    <h3>Lowest Commission</h3>
                    <p className="pp">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    <button className="btn11">Reat more</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default File;
