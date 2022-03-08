import React from 'react';

const Cards = () => {
    return (
        <div style={{ display:"flex"}}>
            <h2>Cards</h2>
            <figure  >
                <img src="price1.jpg" alt="" />
                <figcaption>This Is Nature Image</figcaption>
            </figure>
            <figure>
                <img src="price2.jpg" alt="" />
                <figcaption>This Is Nature Image</figcaption>
            </figure>
            <figure>
                <img src="price3.jpg" alt="" />
                <figcaption>This Is Nature Image</figcaption>
            </figure>
        </div>
    );
};

export default Cards;