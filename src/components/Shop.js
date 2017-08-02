import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setItems, updateItems } from '../redux/actions/shop'
import { updateCookie } from '../redux/actions/cookie';

import './Shop.css';

let itemList = [
    {name: "cursor", multiplier: 1.1, cost: 100, amount: 0},
    {name: "mario", multiplier: 1.1, cost: 100, amount: 0},
];

let initialValue = 100;
let percentage = 1.3;

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            cursorAmount: 0,
            marioAmount: 0,
        }
    }

    componentWillMount(){
        this.props.setItems(itemList);
    }

    buyItem(name, multiplier, cost){
        // LOOP OVER ITEMS

        let storeState = this.props.shop.items;

        for(let i = 0; i < this.props.shop.items.length; i++){
            console.log("props name", this.props.shop.items[i].name);
            // IF GLOBAL NAME EQUALS CLICKED NAME
            if(this.props.shop.items[i].name === name){
                // ITEM AMOUNT FROM GLOBAL STATE
                let amountOfItems = this.props.shop.items[i].amount;


                let newCost = initialValue * Math.pow(percentage, amountOfItems);







                this.props.updateItems(this.props.shop.items[i].cost = newCost, this.props.shop.items[i].amount = amountOfItems, i);
            }
        }




        console.log(name, multiplier, cost);
        if(this.props.cookie.amount >= cost){
            this.props.updateCookie(this.props.cookie.amount - cost);
            console.log(this.props);
            this.setState({
                [name + "Amount"]: this.state[name + "Amount"] + 1,
            }, () => {

            });
        }


        console.log("hello", this.props.shop)
    }

    render() {
        const Items = () => {
            return(
                <div>
                    <ul>
                        {
                            itemList.map((item) => {
                                return (
                                    <li key={item.name}>
                                            <button className="btn-answer" key={item.name} name={item.name} onClick={() => this.buyItem(item.name, item.multiplier, item.cost)}>
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
  return bindActionCreators({ setItems, updateItems, updateCookie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
