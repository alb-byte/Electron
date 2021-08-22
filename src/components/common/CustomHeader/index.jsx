import React from "react";
import { Row, Col, Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const CustomHeader = ({ toggleFormVisibility }) => {
  return (
    <Header>
      <Row justify="center" align="center">
        <Col>
          <Title
            style={{ color: "white", cursor: "pointer" }}
            onClick={toggleFormVisibility}
          >
            Links
          </Title>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
