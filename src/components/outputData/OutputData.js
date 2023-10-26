import React from 'react';

import { ReactComponent as CopyIcon } from '../../assets/svgs/copy.svg';

import styles from './OutputData.module.scss';

const OutputData = ({ newPassword }) => {
  const copyPassword = () => {
    navigator.clipboard.writeText(newPassword)
      .then(() => {
        alert('Text copied to clipboard: ' + newPassword);
      })
      .catch(err => {
        console.error('Error copying to clipboard: ', err);
      });
  };

  return (
    <div className={styles.wrap}>
      <input className={styles.input} value={newPassword} readOnly/>
      <button
        className={styles.button}
        onClick={copyPassword}
        disabled={!newPassword}
      >
        <CopyIcon className={styles.icon} alt="Copy password"/>
      </button>
    </div>
  );
};

export default OutputData;
