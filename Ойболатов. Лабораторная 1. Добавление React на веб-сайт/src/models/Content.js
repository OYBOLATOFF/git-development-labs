import React from "react";
import BeautifulButton from "./BeautifulButton";
import LikeButton from "./LikeButton";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="buttons">
                    <BeautifulButton text="Сделано: 11.11.2023"/>
                    <BeautifulButton text="Выполнил: Ойболатов Рамазан"/>
                    <BeautifulButton text="Группа: ПИ21-2"/>
                </div>
                <div className="main-content">
                    <LikeButton/>
                </div>
            </div>
        )
    }
}

export default Content;