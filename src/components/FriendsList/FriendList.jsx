import FriendsListItem from '../FriendListItem/FriendsListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
