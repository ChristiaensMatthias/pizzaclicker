import React, {Component} from 'react';
import './Shop.css';

class Shop extends Component {
    render() {
        const Items = () => {
            return(
                <ul>
                    {
                        this.props.itemlist.map((item) => {
                            return (
                                <li key={item.name}>
                                        <p className="btn-answer" key={item.name} name={item.name} onClick={this.props.onClick}>
                                            {item.name}
                                        </p>
                                </li>
                            )
                        }, this)
                    }
                </ul>
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
