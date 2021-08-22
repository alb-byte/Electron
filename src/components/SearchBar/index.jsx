import React, { useState } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setTerm } from "../../redux/reducers/link-reducer";

const { Search } = Input;

const SearchBar = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.link.isFetching);
  const handleSearch = (text) => {
    dispatch(setTerm(text));
  };
  const handleClear = (e) => {
    if (e.target.value === "") handleSearch("");
  };
  return (
    <Search
      placeholder="Search"
      enterButton
      size="large"
      allowClear
      // loading
      onChange={handleClear}
      onSearch={handleSearch}
    />
  );
};

export default SearchBar;
