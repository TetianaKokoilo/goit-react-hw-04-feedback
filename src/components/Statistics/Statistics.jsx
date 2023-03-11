import PropTypes from 'prop-types';
import { StyledStatistics, StyledStatisticsText, StyledStatisticsResult, StyledStatisticsTotal } from './Statistics.styled';

export const Statistics = ({
  onTotalCount,
  onPositivePercentage,
  points: { good, neutral, bad },
}) => {
  return (
    <div>
      <StyledStatistics>
        <StyledStatisticsText>
          Good: <StyledStatisticsResult>{good}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Neutral: <StyledStatisticsResult>{neutral}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Bad: <StyledStatisticsResult>{bad}</StyledStatisticsResult>
        </StyledStatisticsText>
      </StyledStatistics>
      <StyledStatisticsTotal>
        Total: <StyledStatisticsResult>{onTotalCount()}</StyledStatisticsResult>
      </StyledStatisticsTotal>
      <StyledStatisticsTotal>
        Positive feedback:
        <StyledStatisticsResult>{onPositivePercentage() ? onPositivePercentage() : '0'}%</StyledStatisticsResult>
      </StyledStatisticsTotal>
    </div>
  );
};

Statistics.propTypes = {
  points: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
