import React from "react";
import PropTypes from "prop-types";
import "./TitleH3.css";
import "./TitleH4.scss";

const propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
/**
 * The title component
 * @param {string}  title       The main title
 * @param {string}  subtitle    The subtitle
 * @constructor
 */
const Title = ({ title, subtitle }) => {
  return (
    <>
      <h3 className={"greenH3"}>{title}</h3>
      <h4 className={"redH4"}>{subtitle}</h4>
    </>
  );
};
Title.propTypes = propTypes;
export default Title;
