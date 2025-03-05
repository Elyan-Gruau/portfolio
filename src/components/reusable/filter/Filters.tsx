import styles from './Filter.module.scss';
import { useState } from 'react';
import { Glass } from '../glass/Glass';

export interface Filter {
  label: string;
  key: string;
}

export interface FiltersProps {
  selectedFilter: Filter;
  filters: Filter[];
  onChange: (filter: Filter) => void;
}

const Filters = ({ filters, selectedFilter, onChange }: FiltersProps) => {
  return (
    <Glass className={styles.container}>
      {filters.map((filter, index) => (
        <button
          aria-selected={filter.key === selectedFilter.key}
          onClick={() => onChange(filter)}
        >
          <Glass className={styles.glass}>{filter.label}</Glass>
        </button>
      ))}
    </Glass>
  );
};

export default Filters;
