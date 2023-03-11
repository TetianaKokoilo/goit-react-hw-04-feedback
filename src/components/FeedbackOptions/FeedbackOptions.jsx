import PropTypes from 'prop-types';
import { StyledButton, StyledButtonContainer } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonContainer>
      {options.map((key, index) => (
          <StyledButton key={index} type="button" onClick={() => onLeaveFeedback(key)}>{key}
        </StyledButton>
      ))}
    </StyledButtonContainer>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.node
}