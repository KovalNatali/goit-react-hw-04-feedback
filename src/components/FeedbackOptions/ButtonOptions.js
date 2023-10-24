import propTypes from 'prop-types';
import { Options } from './ButtonOptions.styled';

export const ButtonOptions = ({onLeaveFeedback}) => {
        return (
            <Options>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }}
                value="good">
                    Good</button>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }} value="neutral">
            Neutral</button>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }} value="bad">
        Bad</button>
            </Options>

        )
    }

  ButtonOptions.propTypes = {
        good: propTypes.number,
        bad: propTypes.number,
        neutral: propTypes.number,
        total: propTypes.number,
        positivePercentage: propTypes.number,
      };