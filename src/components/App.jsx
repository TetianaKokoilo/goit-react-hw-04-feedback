import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

// import PropTypes from 'prop-types';
import { StyledContainer } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };
  const options = Object.keys(state);

  const onLeaveFeedback = keyState => {
    switch (keyState) {
      case good:
        setGood(pervState => pervState + 1);
        break;
      case neutral:
        setNeutral(pervState => pervState + 1);
        break;
      case bad:
        setBad(pervState => pervState + 1);
        break;
    
      default:
        break;
    }
  }

    const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  
  return (
    <StyledContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
        onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statsics">
        {countTotalFeedback() > 0 ? (
          <Statistics
          points={state}
          onTotalCount={countTotalFeedback}
          onPositivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledContainer>
  );
}
// export class OldApp extends Component {
//   static propTypes = {
//     title: PropTypes.string,
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
//     return totalFeedback;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({
//       [key]: (prevState[key] += 1),
//     }));
//   };

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <StyledContainer>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statsics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               points={this.state}
//               onTotalCount={this.countTotalFeedback}
//               onPositivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </StyledContainer>
//     );
//   }
// }
