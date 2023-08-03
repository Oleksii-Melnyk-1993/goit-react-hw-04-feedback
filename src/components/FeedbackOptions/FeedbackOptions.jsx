import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, iconBtn }) => {
  return (
    <div className={css.feedbackContainer}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <div className={css.button_wrapper}>
              {option} {iconBtn[option]}
            </div>
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
