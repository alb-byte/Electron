import React from "react";
import { useDispatch } from "react-redux";
import {
  removeLink,
  tryEditLink,
} from "../../../../redux/reducers/link-reducer";
import LinkItem from "../index";
type PropTypes = {
  link:any;
}
const LinkItemContainer:React.FC<PropTypes> = ({ link }) => {
  const dispatch = useDispatch();
  const handleRemove:()=>void = () => dispatch(removeLink(link.id));
  const handleEdit:()=>void = () => dispatch(tryEditLink(link.id, link.title, link.url));
  return (
    <LinkItem link={link} handleEdit={handleEdit} handleRemove={handleRemove} />
  );
};

export default LinkItemContainer;
