// import Feedback from "components/Feedback/Feedback";
import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0, 
    bad: 0,
  }

  handleClick = (option) => {
    this.setState((prevState) => ({
        [option]: prevState[option] + 1,
    }))  
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0 ? (Math.round(this.state.good / Number(this.countTotalFeedback()) * 100) + '%') : 0;
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            padding: '20px',
          }}
      >
            <Section title='Please leave feedback'>
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClick}/>
            </Section>

            
            {totalFeedback > 0 ? (
                <Section title='Statistics'>
                    <Statistics 
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                  </Section>
                ) : (
                  <Notification notif='There is no feedback yet...'/> 
                )
            }          
      </div>
    )
  }
};
