import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Options/Option";
import Notification from "./components/Notification/Notification";

function App() {
  const [count, setCount] = useState(() => {
    const storagedInf = localStorage.getItem("counts");

    if (storagedInf !== null) {
      return JSON.parse(storagedInf);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = count.good + count.neutral + count.bad;

  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(count));
  }, [count]);
  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          count={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
