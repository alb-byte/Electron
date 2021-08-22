import React from "react";
import { Typography, Row, Col } from "antd";
const { Title } = Typography;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <Row justify="center" align="center">
          <Col>
            <Title>ERROR.</Title>
          </Col>
        </Row>
      );
    }

    return this.props.children;
  }
}
