import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';



const ProductCard = ({ menu }) => {

    return (
        <div className="card product-card h-95 d-flex ">
            <img src={menu.image} className="card-img-top" alt={menu.name} />
            <div className="card-body">
                {menu.category && <h6 className="card-category">{menu.category.name}</h6>}
                <h5 className="card-title">{menu.name}</h5>
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
                    <h5>LKR.{menu.price.toFixed(2)}</h5>
                </div>
            </div>

            <a href={`/menu-details/${menu._id}`} className="card-footer">
                <ion-icon name="eye" className="detail-icons"></ion-icon>
            </a>

        </div>
    );
};

export default ProductCard;

