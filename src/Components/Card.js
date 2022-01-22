import React from "react";

const Card = (props) => {
    const {name, email} = props;
    return(
        <div className="grow pa3 ma2 dib br3 shadow-5 bg-light-blue">
            <img src={`https://robohash.org/${name}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;