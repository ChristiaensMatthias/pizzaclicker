import React, {Component} from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <p>Amount of cookies: { isNaN(this.props.cookieAmount) ? "0" : this.props.cookieAmount}</p>
            </div>
        );
    }
}

export default ScoreBoard;
