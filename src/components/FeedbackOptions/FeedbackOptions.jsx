import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { convertString } from '../helpers/convertString';

export class FeedbackOptions extends Component {
    static propTypes = {
       options: PropTypes.object.isRequired,
       onLeaveFeedback: PropTypes.func.isRequired,
       
      };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.container}>
        {Object.keys(options).map(option => {
          return (
            <button
              className={css.button}
              type="button"
              onClick={onLeaveFeedback}
              name={option}
              key={option}
            >
              {convertString(option)}
            </button>
          );
        })}
      </div>
    );
  }
}
