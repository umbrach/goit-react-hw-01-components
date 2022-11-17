import PropTypes from 'prop-types';
import css from './Statistics.module.css';


const randomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

const Statistics = ({title, stats }) => {
    return (
      <section className={css.statistics} key={stats[0].id}>
        {stats[0].title ? (
          <h2>stats[0].title</h2>
        ) : (
          <h2 className={css.title}>{title}</h2>
        )}

        <ul className={css.statlist}>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stats[0].label}</span>
            <span className={css.percentage}>{stats[0].percentage}%</span>
          </li>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stats[1].label}</span>
            <span className={css.percentage}>{stats[1].percentage}%</span>
          </li>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stats[2].label}</span>
            <span className={css.percentage}>{stats[2].percentage}%</span>
          </li>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stats[3].label}</span>
            <span className={css.percentage}>{stats[3].percentage}%</span>
          </li>
        </ul>
      </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default Statistics;