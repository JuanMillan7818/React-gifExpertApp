import React from "react";

const Loader = () => {
    return(
        <React.Fragment>
            <div className="loader">
                <div className="face face1">
                    <div className="circle"></div>
                </div>
                <div className="face face2">
                    <div className="circle"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Loader;