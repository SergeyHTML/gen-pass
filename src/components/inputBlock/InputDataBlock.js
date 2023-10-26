import React, { useState, useEffect, useCallback } from 'react';

import styles from './InputDataBlock.module.scss';

const checkboxes = [
  {
    name: 'lowercase',
    label: 'Include Lowercase',
    checked: true,
  },
  {
    name: 'uppercase',
    label: 'Include Uppercase',
    checked: false,
  },
  {
    name: 'numbers',
    label: 'Include Numbers',
    checked: false,
  },
  {
    name: 'symbols',
    label: 'Include Symbols',
    checked: false,
  },
];

const CheckboxItem = ({ item, checked = false, onHandleChange }) => (
  <label className={styles.item} key={item.name}>
    <input
      type="checkbox"
      className={styles.checkbox}
      name={item.name}
      checked={checked}
      onChange={onHandleChange}
    />
    <span>{item.label}</span>
  </label>
);

const InputDataBlock = ({ onGetInputData }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [length, setLength] = useState('8')

  const handleChange = useCallback(
    (event) => {
      if (!event.target.checked && Object.values(checkedItems).filter(item => item).length === 1) {
        return;
      }
      setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    },
    [checkedItems]
  );

  useEffect(() => {
    setCheckedItems(checkboxes.reduce((acc, item) => ({ ...acc, [item.name]: item.checked }), {}))
  }, []);

  useEffect(() => {
    onGetInputData({ ...checkedItems, length })
  }, [checkedItems, length]);

  return (
    <div className={styles.wrap}>
      <div>
        <p>Character length {length}</p>
        <input
          type="range"
          className={styles.range}
          min="6"
          max="20"
          step="1"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {
        checkboxes.map(item => (
          <CheckboxItem key={item.name} item={item} checked={checkedItems[item.name]} onHandleChange={handleChange} />
        ))
      }
    </div>
  );
}

export default InputDataBlock;
