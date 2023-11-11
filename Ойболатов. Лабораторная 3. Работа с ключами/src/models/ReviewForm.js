import React from "react";
import BeautifulButton from "./BeautifulButton";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            feedbackText: '',
            rating: 1,
            reviews: []
        }
    }

    render() {
        return (
            <div className="review-form">
                <h1>Оставить отзыв</h1>
                <textarea value={this.feedbackText} onChange={this.handleTextChange} placeholder="Ваш отзыв"></textarea>
                <select value={this.rating} onChange={this.handleRatingChange}>
                    {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
              ))}
                </select>
                <BeautifulButton onClick={this.handleSubmit} text="Отправить"/>
            </div>
        );
    }

    handleSubmit = () => {
        const { feedbackText, rating, reviews } = this.state;
        
        if (feedbackText.trim() === '') {
            alert('Вы не ввели отзыв!');
            return;
        }

        const newReview = {
            text: feedbackText,
            rating: rating,
        };

        this.props.updateReviews(newReview)

        this.setState({
            reviews: [...reviews, newReview],
            feedbackText: feedbackText,
            rating: rating
        })
    }

    handleTextChange = (event) => {
        this.setState({ feedbackText: event.target.value });
    }

    handleRatingChange = (event) => {
        this.setState({ rating: parseInt(event.target.value, 10) });
    }
}

export default ReviewForm;