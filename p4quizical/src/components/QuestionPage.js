import React from "react";
import blob1 from '../images/blob1.svg';
import blob2 from '../images/blob2.svg';
import Frame from './Frame.js';
import { nanoid } from "nanoid";

const QuestionPage = () => {
  const [allQuestions, setAllQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [results, setResults] = React.useState({});
  const [quizChecked, setQuizChecked] = React.useState(false);


  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: selectedOption,
    }));
  };

  React.useEffect(() => {
    const storedQuestions = localStorage.getItem("triviaQuestions");

    if (storedQuestions) {
      setAllQuestions(JSON.parse(storedQuestions));
      setLoading(false);
    } else {
      fetchQuestions();
    }
    
  },[]);

  

 
    const checkAnswers = () => {
      const newResults = {};
  
      allQuestions.forEach((question) => {
        const correctAnswer = question.correct_answer;
        const selectedAnswer = selectedOptions[question.question];
        newResults[question.question] = selectedAnswer === correctAnswer;
      });
  
      setResults(newResults);
      setQuizChecked(true);
    };

    const playAgain = () => {
      setSelectedOptions({});
      setResults({});
      setQuizChecked(false);
      fetchQuestions();
    };

  const fetchQuestions = async (retryCount = 0) => {
    if (retryCount > 3) {
      setError("Failed to fetch questions after multiple attempts");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://opentdb.com/api.php?amount=6&category=18&type=multiple");

      if (!response.ok) {
        if (response.status === 429) {
          console.warn("Rate limit exceeded, retrying...");
          setTimeout(() => fetchQuestions(retryCount + 1), 2000 * (retryCount + 1)); // Exponential backoff
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const data = await response.json();
        setAllQuestions(data.results);
        localStorage.setItem("triviaQuestions", JSON.stringify(data.results));
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const frameElements = allQuestions.map((q) => (
    <Frame 
      key={nanoid()}
      // questionId={q.question}
      question={q.question}
      options={q.incorrect_answers}
      correct={q.correct_answer}
      selected={selectedOptions[q.question]}
      onSelect={handleOptionSelect}
      result={results[q.question]}
    />
  ));

  const correctAnswersCount = Object.values(results).filter(value => value === true).length;


  return (
    <div className="questPage">
      <img className="blobsIcon" alt="" src={blob1} /> 
      
      <div className="quessect">
        {frameElements}
        {/* {correctAnswersCount==6?} */}
        {quizChecked && <div className="result">Correct Answers: {correctAnswersCount}/{allQuestions.length}</div>}
        <button className="check" onClick={quizChecked ? playAgain : checkAnswers}> {quizChecked ? "Play again" : "Check answers"}</button>
        
      </div>
      
      <img className="blobsIcon1" loading="lazy" alt="" src={blob2} />
    
    </div>
    
  );
};

export default QuestionPage;
