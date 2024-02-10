// Card.jsx
import React from "react";
import "../../css/_card.css";
import { BiDollar, BiUser, BiListUl, BiCart } from "react-icons/bi";

export const Card = ({ isYellowTitle }) => {
  return (
    
    <div className="card-item">
      <div className="card border-left-warning shadow h-100 py-2 card-top">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2 ">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                Menus
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              120
              </div>
            </div>
            <div className="col-auto">
               <BiListUl size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

      <div className={`card ${isYellowTitle ? "border-left-warning" : "border-left-primary"} shadow h-100 py-2 card-top`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                Users
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              120
              </div>
            </div>
            <div className="col-auto">
               <BiUser size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

      <div className={`card ${isYellowTitle ? "border-left-warning" : "border-left-primary"} shadow h-100 py-2 card-top`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                EARNINGS (ANNUAL)
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              120
              </div>
            </div>
            <div className="col-auto">
               <BiDollar size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

      <div className={`card ${isYellowTitle ? "border-left-warning" : "border-left-primary"} shadow h-100 py-2 card-top`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                EARNINGS (MONTHLY)
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              40,000
              </div>
            </div>
            <div className="col-auto">
               <BiDollar size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

      <div className={`card ${isYellowTitle ? "border-left-warning" : "border-left-primary"} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                Category
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              40
              </div>
            </div>
            <div className="col-auto">
               <BiListUl size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

      <div className={`card ${isYellowTitle ? "border-left-warning" : "border-left-primary"} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${
                  isYellowTitle ? "text-warning" : "text-primary"
                } text-uppercase mb-1`}
              >
                Orders
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              40
              </div>
            </div>
            <div className="col-auto">
               <BiCart size={24} color= "#3E4095" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
