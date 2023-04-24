import PropTypes from 'prop-types';
import { Span, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Span style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Span>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
