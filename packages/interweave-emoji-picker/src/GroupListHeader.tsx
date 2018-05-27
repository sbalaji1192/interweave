/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  GROUP_COMMONLY_USED,
  GROUP_SEARCH_RESULTS,
  GROUP_SMILEYS_PEOPLE,
  GROUP_NONE,
} from './constants';

export interface GroupListHeaderProps {
  commonMode: string;
  group: string;
  skinTonePalette?: React.ReactNode;
}

export default class GroupListHeader extends React.PureComponent<GroupListHeaderProps> {
  static contextTypes = {
    classNames: PropTypes.objectOf(PropTypes.string),
    messages: PropTypes.objectOf(PropTypes.node),
  };

  static propTypes = {
    commonMode: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    skinTonePalette: PropTypes.node,
  };

  static defaultProps = {
    skinTonePalette: null,
  };

  render() {
    const { commonMode, group, skinTonePalette } = this.props;
    const { classNames, messages } = this.context;
    const showPalette =
      skinTonePalette &&
      (group === GROUP_SMILEYS_PEOPLE || group === GROUP_SEARCH_RESULTS || group === GROUP_NONE);

    return (
      <header className={classNames.emojisHeader}>
        {showPalette && skinTonePalette}

        {group === GROUP_COMMONLY_USED ? messages[commonMode] : messages[group]}
      </header>
    );
  }
}
