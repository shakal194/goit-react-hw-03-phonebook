import proptypes from 'prop-types';
import s from './filter.module.css';

const filter = ({ title, value, onChange }) => {
  return (
    <label className={s.label}>
      <span className={s.label__title}>{title}</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

filter.prototype = {
  title: proptypes.string.isRequired,
  value: proptypes.string.isRequired,
  onChange: proptypes.string.isRequired,
};

export default filter;
