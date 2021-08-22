import React, { useState } from "react";
import { Modal, Input, Row, Col, Typography } from "antd";
import { useInput } from "../hooks";
import {
  addLink,
  editLink,
  setEditableLink,
} from "../../redux/reducers/link-reducer";
import { useDispatch, useSelector } from "react-redux";
const { Title } = Typography;

const MainForm = ({ visible, toggleVisibility }) => {
  console.log("render form");
  const dispatch = useDispatch();
  const editableLink = useSelector((state) => state.link.editableLink);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, changeTitle] = useInput(editableLink.title);
  const [url, changeUrl] = useInput(editableLink.url);

  const handleOk = () => {
    // setConfirmLoading(true);
    // setTimeout(() => {

    //   setConfirmLoading(false);
    // }, 2000);
    if (editableLink.id) {
      dispatch(editLink(editableLink.id, title, url));
      dispatch(setEditableLink());
    } else dispatch(addLink(title, url));
    toggleVisibility();
  };

  const handleCancel = () => toggleVisibility();

  return (
    <Modal
      title="Link"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okButtonProps={{ disabled: !title || !url }}
    >
      <Row justify="center" align="center">
        <Col xs={24}>
          <Title level={5}>Title</Title>
          <Input value={title} onChange={changeTitle} size={"large"} />
        </Col>
      </Row>
      <Row justify="center" align="center">
        <Col xs={24}>
          <Title level={5}>URL</Title>
          <Input value={url} onChange={changeUrl} size={"large"} />
        </Col>
      </Row>
    </Modal>
  );
};

export default MainForm;
