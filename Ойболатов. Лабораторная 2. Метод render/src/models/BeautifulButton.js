import React from "react";

class BeautifulButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="button-64" role="button">
                <span className="text">
                {this.props.text}
                </span>
            </button>
        )
    }
}

export default BeautifulButton;