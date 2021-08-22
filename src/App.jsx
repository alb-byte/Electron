import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import CustomFooter from "./components/common/CustomFooter";
import CustomHeader from "./components/common/CustomHeader";
import PageContent from "./components/common/PageContent";

import { toggleFormVisibility as toggleFormVisibilityAC } from "./redux/reducers/app-reducer";
import { setEditableLink } from "./redux/reducers/link-reducer";
import { useSelector, useDispatch } from "react-redux";
import ErrorBoundary from "./components/common/ErrorBoundary";
function App() {
  const dispatch = useDispatch();
  const formVisibility = useSelector((state) => state.app.formVisibility);
  const toggleFormVisibility = () => {
    dispatch(toggleFormVisibilityAC());
    dispatch(setEditableLink(null, null, null));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader toggleFormVisibility={toggleFormVisibility} />
      <ErrorBoundary>
        <PageContent
          formVisibility={formVisibility}
          toggleFormVisibility={toggleFormVisibility}
        />
      </ErrorBoundary>
      <CustomFooter />
    </Layout>
  );
}

export default App;
