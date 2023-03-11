import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import PropTypes from 'prop-types';
import { StyledContainer } from './App.styled'
export class App extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: (prevState[key] += 1),
    }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statsics" >
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              points={this.state}
              onTotalCount={this.countTotalFeedback}
              onPositivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledContainer>
    );
  }
}
