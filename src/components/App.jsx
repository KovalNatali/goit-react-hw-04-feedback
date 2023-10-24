import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import {ButtonOptions } from "./FeedbackOptions/ButtonOptions";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };


  countTotalFeedback = () => {
    const {good,neutral,bad} = this.state
const total = good + neutral + bad
return total
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage = Math.round(
      (good / (good + neutral + bad)) * 100 || 0
    );
    return countPositiveFeedbackPercentage + '%';

  }

  render() {
    const total = this.countTotalFeedback();
    const  positivePercentage= this.countPositiveFeedbackPercentage();
    return (
      <div>
        <SectionTitle title = "Please leave feedback" >
        <ButtonOptions onLeaveFeedback = {this.addFeedback}></ButtonOptions>
        </SectionTitle>
        <SectionTitle title="Statistics">
        {total !== 0 ?
          (<Statistics
        good={this.state.good}
        bad={this.state.bad}
        neutral={this.state.neutral}
        total={total}
        positivePercentage={positivePercentage}
        />)
          : (<Notification message="There is no feedback"></Notification>)}
          </SectionTitle>
      </div>
      
    );

  }
 
};
