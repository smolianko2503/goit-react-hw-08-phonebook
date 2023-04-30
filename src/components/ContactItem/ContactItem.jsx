import { List, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

import { getIsLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';

const ContactItem = ({ item: { name, number, id } }) => {
  
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <List>
        {name}: {number}
        <ButtonDelete
          type="button"
          disabled={isLoading}
          onClick={() => dispatch(deleteContact(id))}
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
