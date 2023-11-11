import React from "react";
import BeautifulButton from "./BeautifulButton";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: []
        }
    }

    updateReviews = (newReview) => {
        this.setState((prevState) => ({
          reviews: [...prevState.reviews, newReview],
        }));
      };
    
    render() {
        return (
            <div className="content">
                <div className="info">
                    <BeautifulButton text="Сделано: 11.11.2023"/>
                    <BeautifulButton text="Выполнил: Ойболатов Рамазан"/>
                    <BeautifulButton text="Группа: ПИ21-2"/>
                </div>
                <div className="main-content">
                    <ReviewForm updateReviews={this.updateReviews}/>
                    <ReviewList reviews={this.state.reviews}/>
                </div>
            </div>
        )
    }
}

export default Content;