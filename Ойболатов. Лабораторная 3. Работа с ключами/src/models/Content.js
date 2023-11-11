import React from "react";
import BeautifulButton from "./BeautifulButton";
import WriterList from "./WriterList";
import Calculator from "./Calculator";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <WriterList/>
                <Calculator/>
            </div>
        )
    }
}

export default Content;