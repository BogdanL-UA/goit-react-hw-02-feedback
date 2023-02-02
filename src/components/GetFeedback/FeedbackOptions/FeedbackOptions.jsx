import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({ onBtnClick }) {
  return (
    <div className={css.controlsButtons}>
      <button
        type="button"
        className={css.button}
        onClick={() => onBtnClick('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onBtnClick('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onBtnClick('bad')}
      >
        Bad
      </button>
    </div>
  );
}
