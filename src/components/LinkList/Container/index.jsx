import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LinkList from "../index";
import { requestLinks, clearLinks } from "../../../redux/reducers/link-reducer";
const LinkListContainer = () => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.link.links);
  const isFetching = useSelector((state) => state.link.isFetching);
  const hasMore = useSelector((state) => state.link.hasMoreLinks);
  const term = useSelector((state) => state.link.term);

  useEffect(() => {
    dispatch(requestLinks(1, term));
    return function cleanup() {};
  }, []);
  // useEffect(() => {
  //   dispatch(clearLinks());

  // }, [term]);

  const loadMore = (page) => dispatch(requestLinks(page, term));
  return (
    <LinkList
      loadMore={loadMore}
      hasMore={hasMore}
      isFetching={isFetching}
      links={links}
    />
  );
};

export default LinkListContainer;
