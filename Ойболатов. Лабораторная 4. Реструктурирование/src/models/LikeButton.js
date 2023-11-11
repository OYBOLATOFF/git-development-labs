import React from "react";
import BeautifulButton from "./BeautifulButton";

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }

    render() {
        return (
            <BeautifulButton onClick={this.handleLikeClick} text={`Лайков: ${this.state.likes}`}/>
        )
    }

    handleLikeClick = () => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
          }));
    }
}

export default LikeButton;