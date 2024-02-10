import React from "react";
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import { Card } from "../components/dashboard/Card";




const Starter = () => {



  return (
    <div>
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>

      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
