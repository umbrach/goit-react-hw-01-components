import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
      <table className={css.transaction}>
        <thead>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={css.row}>{item.type}</td>
              <td className={css.row}>{item.amount}</td>
              <td className={css.row}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

TransactionHistory.propType = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;