import React from 'react';
import Slide from './Slide';
import styles from './BuyEth.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';
import button from '../Button.css';

class BuyEth extends React.Component {
    render() {
        return (
            <Slide linkTo="/tutorial">
                <div className={slideWrapper.wrapper}>
                    <p>Your NeuFund wallet has been successfully setup.</p>
                    <p>We will proceed with getting and storing some ETH which are then will be used to purchase
                        Neumarks.</p>
                    <div className={styles.details}>
                        <Balance of="ETH">
                            <button className={button.btn}>
                                Buy
                            </button>
                        </Balance>
                        <Balance of="NMK"/>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default BuyEth;