import React, {Component} from 'react';
import './Shop.css';

let itemList = [
    {name: "cursor", multiplier: 1.1, cost: 100},
    {name: "mario", multiplier: 1.1, cost: 100},
];

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            cursorAmount: 0,
            marioAmount: 0,
        }
    }

    buyItem(name, multiplier, cost){
        console.log(name, multiplier, cost);
        this.setState({
            [name + "Amount"]: this.state[name + "Amount"] + 1
        })
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

export default Shop;
