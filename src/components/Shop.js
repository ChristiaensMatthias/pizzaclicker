import React, {Component} from 'react';
import './Shop.css';

let itemlist = [
    {name: "item1", multiplier: 1.1, cost: 100},
    {name: "item2", multiplier: 1.2, cost: 200},
    {name: "item3", multiplier: 1.3, cost: 300}
];

class Shop extends Component {
    render() {
        return (
            <div className="shop">
                <p>Shop</p>
                {
                    itemlist.map(function(item) {
                        return (
                            <li key={item.name}>
                                    <button className="btn-answer" key={item.name}>
                                        {item.name}
                                    </button>
                            </li>
                        )
                    }, this)
                }
            </div>
        );
    }
}

export default Shop;
