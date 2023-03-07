import PropTypes from 'prop-types';
import { FeedbackBtnList, FeedbackBtn } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackBtnList>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
