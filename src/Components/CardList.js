import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardArray = robots.map((robo, index) => {
        return (
            <Card key={index} name={robo.name} email={robo.email} />
        );
    })

    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;