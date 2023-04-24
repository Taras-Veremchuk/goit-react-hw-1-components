import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Item, List } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
