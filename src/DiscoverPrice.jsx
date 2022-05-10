import React from 'react';
import ComPrice from './ComPrice';

function DiscoverPrice() {
    const dataPrice=[
        {head: 'starter', price: '$5.90',clas:'card starter'},
        {head: 'standard', price: '$10.90',clas:'card standard'},
        {head: 'premium', price: '$19.90',clas:'card premium'}
    ]
    const DPrice = dataPrice.map((data,index) => <ComPrice key={index} head = {data.head} price ={data.price} clas={data.clas}/>)
    return ( 
            <section className="section-prices">
                <h2 className="section-header">Our Pricing</h2>
                <div className="list-boxs">
                    {DPrice}
                </div>
            </section> 
            );
}

export default DiscoverPrice;