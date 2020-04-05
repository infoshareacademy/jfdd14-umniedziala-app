import React from "react";
import "./FacebookButton.css";

const FacebookButton = () => {
    const url = "http://app.umniedziala.jfdd14.is-academy.pl/";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

    return (
        <div className="socialShareContainer">
            <a href={facebookUrl} target="_blank" rel="noreferrer noopener">
                <button
                    className="ui facebook button"
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <i className="facebook icon"></i>
                    Share
                </button>
            </a>
        </div>
    );
};

export default FacebookButton;
