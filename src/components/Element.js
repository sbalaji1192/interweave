/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import React, { PropTypes } from 'react';

import type { ElementProps } from '../types';

export default function Element({
  attributes = {},
  className,
  children,
  tagName: Tag,
  selfClose = false,
}: ElementProps) {
  const props = {
    ...attributes,
    className: [
      'interweave',
      className || '',
      attributes.className || '',
    ].filter(Boolean).join(' '),
  };

  if (selfClose) {
    return (
      <Tag {...props} />
    );
  }

  return (
    <Tag {...props}>{children || null}</Tag>
  );
}

Element.propTypes = {
  attributes: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])),
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string.isRequired,
  selfClose: PropTypes.bool,
};
