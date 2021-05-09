import React from "react";
import PropTypes from "prop-types";

import Content from "./content";

const Page = props => {
  const { page } = props;
  const html = (page || {}).html;

  return (
      <>
      <Content html={html} />
      </>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;