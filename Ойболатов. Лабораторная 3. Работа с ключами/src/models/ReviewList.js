import { render } from "@testing-library/react";
import React from "react";

class ReviewList extends React.Component {
    render() {
        return (
            <div className="reviews">
                {this.props.reviews.map((review, index) => (
                    <div className="review">
                        <div className="review-title">
                            <h4>{review.text}</h4>
                        </div>
                        <div className="review-rating">
                            {Array.from({ length: review.rating }, (_, index) => (
                                <img src="star.png"></img>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ReviewList;