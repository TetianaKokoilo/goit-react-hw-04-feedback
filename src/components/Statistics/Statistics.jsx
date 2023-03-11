import PropTypes from 'prop-types';
import { StyledStatistics, StyledStatisticsText, StyledStatisticsResult, StyledStatisticsTotal } from './Statistics.styled';

export const Statistics = ({
  onTotalCount,
  onPositivePercentage,
  points,
}) => {
  return (
    <div>
      <StyledStatistics>
        <StyledStatisticsText>
          Good: <StyledStatisticsResult>{points.good}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Neutral: <StyledStatisticsResult>{points.neutral}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Bad: <StyledStatisticsResult>{points.bad}</StyledStatisticsResult>
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
