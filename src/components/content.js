import React from "react";
import PropTypes from "prop-types";

const Content = props => {
    const { classes, html, children } = props;

    if (html) {
      return <div className={classes.content} dangerouslySetInnerHTML={{ __html: html }} />;
    } else {
      return <div className={classes.content}>{children}</div>;
    }
  };

  Content.propTypes = {
    classes: PropTypes.object.isRequired,
    html: PropTypes.string,
    children: PropTypes.node,
  };



  export default Content;
