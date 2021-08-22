import React from "react";
import { Row, Col, Layout } from "antd";
import LinkInput from "../../SearchBar";
import LinkListContainer from "../../LinkList/Container";
import MainForm from "../../MainForm";
const { Content } = Layout;

const PageContent = ({ toggleFormVisibility, formVisibility }) => {
  return (
    <Content>
      {formVisibility && (
        <MainForm visible={true} toggleVisibility={toggleFormVisibility} />
      )}
      {false && (
        <Row justify="center" align="center">
          <Col md={12} xs={24}>
            <LinkInput />
          </Col>
        </Row>
      )}
      <Row justify="center" align="center">
        <Col md={18} lg={16} xs={24}>
          <LinkListContainer />
        </Col>
      </Row>
    </Content>
  );
};

export default PageContent;
