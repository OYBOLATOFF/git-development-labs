import React from "react";
import BeautifulButton from "./BeautifulButton";
import Shop from "./Shop";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Shop/>
            </div>
        )
    }
}

export default Content;