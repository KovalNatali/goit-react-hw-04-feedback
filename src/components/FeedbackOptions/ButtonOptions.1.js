import { Options } from './ButtonOptions.styled';

export const ButtonOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Options>
       {options.map((option) => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}
    </Options>
  );
};
