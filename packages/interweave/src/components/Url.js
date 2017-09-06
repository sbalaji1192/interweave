/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

import type { UrlProps } from '../types';

export default class Url extends React.PureComponent<UrlProps> {
  static propTypes = {
    children: PropTypes.string.isRequired,
    urlParts: PropTypes.shape({
      scheme: PropTypes.string,
      auth: PropTypes.string,
      host: PropTypes.string,
      port: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      path: PropTypes.string,
      query: PropTypes.string,
      fragment: PropTypes.string,
    }),
  };

  static defaultProps = {
    urlParts: {},
  };

  render() {
    const { children, ...props } = this.props;
    let url = children;

    if (!url.match(/^https?:\/\//)) {
      url = `http://${url}`;
    }

    return (
      <Link {...props} href={url}>
        {children}
      </Link>
    );
  }
}