import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export const App = () => {
  const [goodFb, setGoodFb] = useState(0);
  const [neutralFb, setNeutralFb] = useState(0);
  const [badFb, setBadFb] = useState(0);

  const handleClick = (option) => {
    if(option === 'good') {
      setGoodFb(goodFb + 1);
    } else if(option === 'neutral') {
      setNeutralFb(neutralFb + 1);
    } else {
      setBadFb(badFb + 1);
    }
  }

  const countTotalFeedback = () => {
    const totalFb = goodFb + badFb + neutralFb;
    return totalFb;  
  }

  const totalFeedback = Number(countTotalFeedback());

  const countPositiveFeedbackPercentage = () => {
    return totalFeedback > 0 ? (Math.round(goodFb / Number(totalFeedback) * 100)) : 0;
  }

  let posPerr = Number(countPositiveFeedbackPercentage());

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
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClick}/>
      </Section>

      {totalFeedback > 0 ? (
        <Section title='Statistics'>
          <Statistics 
            good={goodFb}
            neutral={neutralFb}
            bad={badFb}
            total={totalFeedback}
            positivePercentage={posPerr + '%'}
          />
          </Section>
        ) : ( <Notification notif='There is no feedback yet...'/> )
      }          
    </div>
  )
};
