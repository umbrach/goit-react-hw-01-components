import PropTypes from 'prop-types';


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
      <section class="statistics" key={stats[0].id}>
        {stats[0].title ? (
          <h2>stats[0].title</h2>
        ) : (
          <h2 class="title">{title}</h2>
        )}

        <ul class="stat-list">
          <li class="item" style={{ backgroundColor: randomColor() }}>
            <span class="label">{stats[0].label}</span>
            <span class="percentage">{stats[0].percentage}%</span>
          </li>
          <li class="item" style={{ backgroundColor: randomColor() }}>
            <span class="label">{stats[1].label}</span>
            <span class="percentage">{stats[1].percentage}%</span>
          </li>
          <li class="item" style={{ backgroundColor: randomColor() }}>
            <span class="label">{stats[2].label}</span>
            <span class="percentage">{stats[2].percentage}%</span>
          </li>
          <li class="item" style={{ backgroundColor: randomColor() }}>
            <span class="label">{stats[3].label}</span>
            <span class="percentage">{stats[3].percentage}%</span>
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