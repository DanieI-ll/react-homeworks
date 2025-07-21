import React, { useState } from 'react';
import styles from './Answer.module.css';

function Answer({ a, b, updatePoints }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = a + b;
    updatePoints(parseInt(answer) === correctAnswer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.answer_input} type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button className={styles.answer_button} type="submit">
        Проверить
      </button>
    </form>
  );
}

export default Answer;
