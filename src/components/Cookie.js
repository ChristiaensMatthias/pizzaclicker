import React, {Component} from 'react';
import './Cookie.css';

import ScoreBoard from './ScoreBoard';
import Shop from './Shop';

//GLOBAL STATS
let cName = "cookie";
let expirationAmount = 365;

let itemList = [
    {name: "Cursor", multiplier: 1.1, cost: 100},
    {name: "Mario", multiplier: 1.1, cost: 100},
];

class Cookie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookieAmount: 0,
            cursorAmount: 0,
        }
    }

    getCookie() {
        let decodedCookie = decodeURIComponent(document.cookie);
        let name = cName + "=";
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
    }

    setCookie(cname, cvalue, exdays) {
        console.log("fired");

        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    deleteCookie() {
        document.cookie = cName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.reload()
    }

    componentWillMount() {
        let cookieValue = this.getCookie();
        let intValue = parseInt(cookieValue, 10);

        this.setState({
            cookieAmount: intValue
        })
    }

    cookieClick() {
        if (typeof this.state.cookieAmount === ("undefined") || isNaN(this.state.cookieAmount) ) {
            console.log("this if");
            this.setState({
                cookieAmount: 1
            }, () => {
                let cookieAmount = this.state.cookieAmount;
                console.log('cookie attributes', cName, cookieAmount, expirationAmount);
                this.setCookie(cName, cookieAmount, expirationAmount)
            })
        } else {
            console.log("this else", this.state.cookieAmount);
            this.setState({
                cookieAmount: this.state.cookieAmount + (1 + (this.state.cursorAmount))
            }, () => {
                let cookieAmount = this.state.cookieAmount;
                console.log('cookie attributes', cName, cookieAmount, expirationAmount);
                this.setCookie(cName, cookieAmount, expirationAmount)
            });
        }
    };

    buyItem(event){
        console.log('clicked');
        let itemName = event;
        console.log("itemname", itemName)
    }

    render() {
        return (
            <div>
                <ScoreBoard cookieAmount={this.state.cookieAmount}/>
                <Shop itemlist={itemList} onClick={() => this.buyItem(event)}/>

                <div className="cookie" onClick={() => this.cookieClick()}>

                </div>

                <button onClick={() => this.deleteCookie()}>Delete progress</button>
            </div>
        );
    }
}

export default Cookie;
