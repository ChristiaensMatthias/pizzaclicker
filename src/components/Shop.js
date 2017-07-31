import React, {Component} from 'react';
import './Shop.css';

class Shop extends Component {
    buyItem(name){
        console.log('clicked');
        console.log("itemName", name)
    }

    render() {
        console.log(this.props);
        const Items = () => {
            return(
                <ul>
                    {

                        this.props.itemlist.map((item) => {
                            return (
                                <li key={item.name}>
                                        <button className="btn-answer" key={item.name} onClick={() => this.buyItem(item.name)}>
                                            {item.name}
                                        </button>
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
