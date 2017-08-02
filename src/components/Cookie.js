import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCookie } from '../redux/actions/cookie';

import './Cookie.css';

import ScoreBoard from './ScoreBoard';

//GLOBAL STATS
let cName = "cookie";
let expirationAmount = 365;

class Cookie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookieAmount: 100000,
        }
    }

    getCookie = () => {
        console.log("properties", this.props);
        let decodedCookie = decodeURIComponent(document.cookie);
        let name = this.props.cookieName + "=";
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
    };

    setCookie = (cname, cvalue, exdays) => {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        console.log("cookie value", cvalue);
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    deleteCookie = () => {
        document.cookie = cName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.reload()
    };

    componentWillMount() {
        let isCookiePresent = document.cookie.indexOf(cName);
        if(isCookiePresent >= 0){
            // REQUEST COOKIE
            let cookieValue = this.getCookie();
            let intValue = parseInt(cookieValue, 10);

            // SET COOKIE DATA TO COMPONENT STATE
            this.setState({
                cookieAmount: intValue
            }, () => {
                this.props.updateCookie(this.state.cookieAmount);
            })
        }
        // SAVE DATA TO COOKIE EVERY 60 SECONDS
        setInterval(() => { this.setCookie(cName, this.state.cookieAmount, expirationAmount) }, 60000);
    }

    cookieClick = () => {
        // SET STATE OF COOKIE AMOUNT TO COOKIE AMOUNT + 1
        this.setState({
            cookieAmount: this.state.cookieAmount + 1
        }, () => {
            // UPDATE REDUX STATE TO NEW COOKIE AMOUNT
            this.props.updateCookie(this.state.cookieAmount);
        });
    };

    render() {
        return (
            <div>
                <ScoreBoard cookieAmount={this.props.cookie.amount}/>
                <div className="cookie" onClick={() => this.cookieClick()}></div>
                <button onClick={() => this.deleteCookie()}>Delete progress</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cookie: state.cookie };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCookie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookie);
