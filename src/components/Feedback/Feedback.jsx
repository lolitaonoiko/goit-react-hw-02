function Feedback({ count, totalFeedback, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {count.good}</li>
      <li>Neutral: {count.neutral}</li>
      <li>Bad: {count.bad}</li>
      {totalFeedback > 0 && (
        <>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </>
      )}
    </ul>
  );
}

export default Feedback;
