import React, { useState } from "react";
import { List, Button, Skeleton, message } from "antd";
import { EditFilled, DeleteFilled, CopyFilled } from "@ant-design/icons";
// import CopyToClipboard  from "react-copy-to-clipboard";

type PropTypes = {
  link:any;
  handleEdit:()=>void;
  handleRemove:()=>void;
}
const LinkItem :React.FC<PropTypes> = ({ link, handleEdit, handleRemove }) => {
  const [copied, setCopied] = useState<boolean>(false);
  if (copied) {
    message.success("Copied.");
    setCopied(false);
  }

  return (
    <List.Item
      actions={[
        <Button
          color={"primary"}
          icon={<EditFilled />}
          onClick={handleEdit}
          size={"large"}
        />,
        <Button
          danger
          icon={<DeleteFilled />}
          onClick={handleRemove}
          size={"large"}
        />,
      ]}
    >
      <Skeleton title={false} loading={link.loading} active>
        <List.Item.Meta
          title={<a href={link.url}>{link.title}</a>}
          description={link.url}
        />
        <div>
          {/* <CopyToClipboard text={link.url} onCopy={() => setCopied(true)}> */}
            <Button color={"primary"} icon={<CopyFilled />} size={"large"} />
          {/* </CopyToClipboard> */}
        </div>
      </Skeleton>
    </List.Item>
  );
};

export default LinkItem;
