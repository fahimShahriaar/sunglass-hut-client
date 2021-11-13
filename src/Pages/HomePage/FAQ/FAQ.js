import React from 'react';
import deliveryImg from '../../../img/banner1.png';
import FAQSingle from '../FAQSingle/FAQSingle';
import faq from './FAQ.json'

const FAQ = () => {
    return (
        <div className="container">
            <h2 className="ms-2 my-5">FAQ - Frequently Answer Questions</h2>
            <div className="row">
                <div className="col-md-6 p-4">
                    <img src={deliveryImg} alt="" className="w-100" style={{ height: "500px" }} />
                </div>
                <div className="col-md-6 px-4">
                    {
                        faq.map((data, i) => <FAQSingle faq={data} key={i} />)
                    }

                </div>
            </div>

        </div>
    );
};

export default FAQ;