import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <h2 className={css.title}>{title}</h2>
        {children}
      </Fragment>
    );
  }
}
