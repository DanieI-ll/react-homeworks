import React, { useState } from 'react';
import Answer from '../Answer/Answer.jsx';
import styles from './MathQuiz.module.css';

function MathQuiz() {
  const [score, setScore] = useState(0);
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  const updatePoints = (isCorrect) => {
    setScore(score + (isCorrect ? 1 : -1));
  };

  return (
    <div className={styles.math_block}>
      <h1>
        Ваши очки: {score}
      </h1>
      <p className={styles.math_numbers}>
        {a} + {b} = ?
      </p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
