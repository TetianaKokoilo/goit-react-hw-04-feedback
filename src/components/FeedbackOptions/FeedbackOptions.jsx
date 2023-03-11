import PropTypes from 'prop-types';
import { StyledButton, StyledButtonContainer } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonContainer>
      {options.map((key) => (
          <StyledButton key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}
        </StyledButton>
      ))}
    </StyledButtonContainer>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.node
}