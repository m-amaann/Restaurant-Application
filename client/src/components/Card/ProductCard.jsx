import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

import Porduct from '../../assets/food/submarine.jpeg';


const ProductCard = () => {
    return (
        <>
        <div className="card product-card h-95 d-flex ">
            <img src={Porduct} className="card-img-top" alt="Menu item" />
            <div className="card-body">
                <h6 className="card-category">Burger</h6>
                <h5 className="card-title">King Slice Burgers</h5>
                <div className="card-rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <span key={index}>
                                <i className={ratingValue <= 5 ? "fas fa-star" : "far fa-star"}></i>
                            </span>
                        );
                    })}
                    <span className="card-rating-count">(24)</span>
                </div>
                <div className="card-price">
                    <h5>LKR.2700</h5>
                </div>
            </div>

            <div className="card-footer">
                <ion-icon name="eye" className="detail-icons"></ion-icon>
            </div>
        </div>
        </>
    );
};

export default ProductCard;

