import React from "react";
import { Row, Col, Layout, Typography } from "antd";
const { Footer } = Layout;
const { Title } = Typography;
const CustomFooter = () => {
  return (
    <Footer>
      <Row justify="center" align="center">
        <Col>
          <Title level={5}>Albert Schimanel ©2021</Title>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
