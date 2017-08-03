import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setItems, updateItems} from '../redux/actions/shop'
import {updateCookie} from '../redux/actions/cookie';

import './Shop.css';

let itemList = [
    { name: "cursor" },
    { name: "mario" },
];

let newItemList = {
    cursor: { cost: 100, amount: 0 },
    mario: { cost: 100, amount: 0 },
};

let initialValue = 100;
let percentage = 1.3;

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            cursorAmount: 0,
            marioAmount: 0,
        }
    }

    componentWillMount() {
        this.props.setItems(newItemList);
    }

    buyItem(name) {
        // LOOP OVER ITEMS
        let storeState = this.props.shop.items;
        console.log("store state", storeState);

        for (let objectName in this.props.shop.items) {
            if (objectName === name) {
                let cost = this.props.shop.items[name].cost;

                if (this.props.cookie.amount >= cost) {
                    this.props.updateCookie(this.props.cookie.amount - cost);
                    this.setState({
                        [name + "Amount"]: this.state[name + "Amount"] + 1,
                    }, () => {
                        let newAmount = this.state[name + "Amount"];
                        let newCost = initialValue * Math.pow(percentage, newAmount);
                        let setItem = this.props.shop.items[name];
                        setItem.cost = newCost;
                        setItem.amount = newAmount;
                        this.props.updateItems(setItem, name);
                    });
                } else {
                    console.log("not enough cookies");
                }
            }
        }
    }

    render() {
        const Items = () => {
            return (
                <div>
                    <ul>
                        {
                            itemList.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <button className="btn-answer" key={item.name} name={item.name}
                                                onClick={() => this.buyItem(item.name)}>
                                            {item.name}
                                        </button>
                                        <p>{item.name} amount: {this.state[item.name + "Amount"]}</p>
                                    </li>
                                )
                            }, this)
                        }
                    </ul>
                </div>
            )
        };

        return (
            <div className="shop">
                <p>Shop</p>

                <Items />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cookie: state.cookie,
        shop: state.shop
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setItems, updateItems, updateCookie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
