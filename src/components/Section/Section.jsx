import PropTypes from 'prop-types';
import { StyledTitle } from './Section.styled'


export const Section = ({ title, children }) => {
    return (
        <div>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}