import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';


export const Notification = ({ message }) => {
  return (
      <StyledMessage>{message}</StyledMessage>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
