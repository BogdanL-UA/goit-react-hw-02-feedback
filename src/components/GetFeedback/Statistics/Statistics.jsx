import React from 'react';
import css from '../Statistics/Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.statistics}>
      <ul className={css.statisticsList}>
        <li className={css.listItem}>Good:{good}</li>
        <li className={css.listItem}>Neutral:{neutral}</li>
        <li className={css.listItem}>Bad:{bad}</li>
        <li className={css.listItem}>Total:{total}</li>
        <li className={css.listItem}>
          Positive feedback:{positivePercentage}%
        </li>
      </ul>
    </div>
  );
}
