import { List, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

const ContactItem = ({ item: { name, number, id } }) => {
  
  const dispatch = useDispatch();
  
  return (
    <div>
      <List>
        {name}: {number}
        <ButtonDelete
          type="button"
          onClick={() => dispatch(deleteContacts(id))}
        >
          Delete
        </ButtonDelete>
      </List>
    </div>
  );
};



export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
