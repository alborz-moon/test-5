import React from 'react';

function ComPrice(props) {

    return ( 
                <div className={props.clas}>
                    <div className="head">
                        {props.head}
                    </div>
                    <div className="ticket">{props.price}</div>
                    <div className="body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                            magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                        <button className="btn">Order Now</button>
                    </div>
                </div>
     );
}

export default ComPrice;