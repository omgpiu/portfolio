import React from 'react';
import st from './Payment.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Price from './Price/Price';


const Payment = () => {
    return <div className={st.block}>
        <div className={`${styleContainer.container} ${st.container}`}>
            <h2 className={st.title}>Pricing Table</h2>
            <div className={st.items}>

                <Price title={'Hourly'}
                       price={'$60'} plan={'Hourly plan'}
                       support={'One Time Support'}
                       available={'24/7 support'}
                />
                <Price title={'Monthly'}
                       price={'$600'} plan={'Monthly plan'}
                       support={'Email Support'}
                       available={'24/7 support'}
                />
                <Price title={'Full Time'}
                       price={'$2000'} plan={'Full plan'}
                       support={'One Time Support'}
                       available={'24/7 support'}


                />


            </div>
        </div>

    </div>;
};


export default Payment;