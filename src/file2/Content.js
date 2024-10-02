import { Component } from "react";
import "../file2/Content.css"

class Content extends Component {
    render() {
        return (
            <div>
                <div className="position">
                    <div className="con">
                        <div className="colm1">
                    <div className="content">
                        <h3 className="h3">Who we are</h3>
                        <h1 className="h1">  Assisting individuals locating </h1>
                        <h1 className="hh">the appropriate real estate.</h1>
                        <h5 className="h5">Donec porttitor euismod dignissim. Nullam a lacinia ipsum,nec dignissim pu. Nulla convallis </h5>
                        <h5 className="h51">    ipsum molestie nibh malesuada, ac malesuada leo volutpat.</h5>
                        <div className="bor">
                            <img className="img11" src="/images/ic1.png" alt="name" />
                            <div> <h4 className="h44">Donec porttitor euismod</h4>
                                <h5 className="h55">Nullam a lacinia ipsum, nec dignissim purus. Nulla</h5>
                            </div>
                        </div>
                        <div className="bor2">
                            <img src="/images/ic2.png" />
                            <div> <h4 className="h43">Donec porttitor euismod</h4>
                                <h5 className="h54">Nullam a lacinia ipsum, nec dignissim purus. Nulla</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="colm2">
                        <div>
                        <img className="img5" src="/images/i1.png" alt="img"/>
                        </div>
                        <div className="cc">
                        <img className="img6" src="/images/R1.png" alt="img"/>
                        <div>
                        <img className="img7" src="/images/R2.png" alt="img"/>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}








export default Content;