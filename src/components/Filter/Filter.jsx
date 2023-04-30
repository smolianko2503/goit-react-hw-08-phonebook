import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

import { FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContactsValue = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <div>
      <label>Find Contacts by name</label>
      <FilterInput type="text" value={filter} onChange={filterContactsValue} />
    </div>
  );
};

export default Filter;
