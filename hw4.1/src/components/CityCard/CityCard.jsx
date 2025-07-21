import styles from './CityCard.module.css';

const CityCard = ({ city }) => {
  if (!city) {
    return <p className={styles.city_card_text}>Выберите город, чтобы увидеть информацию.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h2>{city.name}</h2>
      <img className={styles.city_img} src={city.imageUrl} alt={city.name} />
      <p className={styles.city_card_desc}>{city.description}</p>
      <ul className={styles.city_card_facts}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
