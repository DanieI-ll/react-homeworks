import styles from './CitySelector.module.css';

const CitySelector = ({ cities, onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.city_selector_header}>Выберите город</h2>
      <select className={styles.city_selector_form} onChange={(e) => onSelect(e.target.value)}>
        <option value="">--</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
