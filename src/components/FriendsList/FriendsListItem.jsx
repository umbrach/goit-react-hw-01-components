import PropTypes from 'prop-types';


const FriendsListItem = ({ avatar, name, isOnline, id }) => {
    return (
      <li class="item" key={id}>
            <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
      </li>
    );
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
}

export default FriendsListItem;