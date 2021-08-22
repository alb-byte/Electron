import React from "react";
import { List, Spin, Row, Col } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import LinkItemContainer from "./LinkItem/Container/index";

type PropTypes = {
  loadMore:()=>void;
  hasMore:boolean;
  isFetching:boolean;
  links:[any];
}
const LinkList:React.FC<PropTypes> = ({ loadMore, hasMore, isFetching, links }) => {
  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={loadMore}
        hasMore={!isFetching && hasMore}
        useWindow={false}
      >
        <List
          dataSource={links}
          renderItem={(item) => <LinkItemContainer link={item} key={item.id} />}
        >
          {isFetching && hasMore && (
            <Row justify="center">
              <Col>
                <Spin />
              </Col>
            </Row>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
};

export default LinkList;
