import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div> 
            <ul className={styles.statisticsList}>
                <li className={styles.statisticsListItem}>Good: {good}</li>
                <li className={styles.statisticsListItem}>Neutral: {neutral}</li>
                <li className={styles.statisticsListItem}>Bad: {bad}</li>
                <li className={styles.statisticsListItem}>Total: {total}</li>
                <li className={styles.statisticsListItem}> Positive Feedback: {positivePercentage}</li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;