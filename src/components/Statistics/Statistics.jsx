import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p className={css.statItem}>
          Good: <span className={css.value}>{good}</span>{' '}
        </p>
        <p className={css.statItem}>
          Neutral:
          <span className={css.value}>{neutral}</span>{' '}
        </p>
        <p className={css.statItem}>
          Bad: <span className={css.value}>{bad}</span>{' '}
        </p>
        <p className={css.statItem}>
          Total Feedbacks: <span className={css.value}>{total}</span>{' '}
        </p>
      </div>
      <div className={css.positive_container}>
        <p className={css.statItem_positive}>
          Positive Feedback:{' '}
          <span className={css.value}>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
