import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { ButtonOptions } from './FeedbackOptions/ButtonOptions';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    option === 'good' && setGood(prevGood => prevGood + 1);
    option === 'neutral' && setNeutral(prevNeutral => prevNeutral + 1);
    option === 'bad' && setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const countPositiveFeedbackPercentage = Math.round(
      (good / (good + neutral + bad)) * 100 || 0
    );
    return countPositiveFeedbackPercentage + '%';
  };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <ButtonOptions onLeaveFeedback={addFeedback}></ButtonOptions>
      </SectionTitle>
      <SectionTitle title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </SectionTitle>
    </div>
  );
};
