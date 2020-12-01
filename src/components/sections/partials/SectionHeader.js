import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {



  return (
    <>
      {(data.title || data.paragraph) &&
        <div>
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;