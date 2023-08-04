import { useState } from 'react';
import css from './App.module.css';
import { FcCancel } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';
import { FcDisplay } from 'react-icons/fc';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const iconBtn = {
    good: <FcCheckmark size="30px" className={css.icon_good} />,
    neutral: <FcDisplay size="30px" />,
    bad: <FcCancel size="30px" className={css.icon_bad} />,
  };

  const onBtnClicked = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.wrapper}>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onBtnClicked}
          iconBtn={iconBtn}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
