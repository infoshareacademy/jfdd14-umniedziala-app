import React, { Component } from "react";
import "./FacebookButton.css";

class SocialShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };

        this.shareOpenToggle = this.shareOpenToggle.bind(this);
    }

    shareOpenToggle() {
        if (this.state.shareOpen === "closeShare") {
            this.setState({
                shareOpen: "openShare",
                toggleButtonText: "Hide sharing options"
            });
        } else {
            this.setState({
                shareOpen: "closeShare",
                toggleButtonText: "Share this"
            });
        }
    }

    render() {
        //URL from current page
        const url = "window.location.href";
        //URL patterns for Social media sites share functionalities
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

        return (
            <div className="socialShareContainer">
                <div>
                    
                </div>
                <div className={this.state.shareOpen}>
                    <a href={facebookUrl} target="_blank">
                        {" "}
                        <button class="ui facebook button" 
                    onClick={this.shareOpenToggle}
                    href={facebookUrl} target="_blank"
                    > 
                    <i class="facebook icon"></i>
                    Facebook
                    </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default SocialShare;
