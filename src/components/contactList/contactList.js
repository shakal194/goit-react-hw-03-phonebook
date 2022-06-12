import proptypes from 'prop-types';
import { ContactItem } from './contactItem';
import s from './contactList.module.css';

const contactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactItem.proptypes = {
  filteredContacts: proptypes.arrayOf(
    proptypes.shape({
      id: proptypes.string.isRequired,
      name: proptypes.string.isRequired,
      number: proptypes.string.isRequired,
    })
  ),
  onDelete: proptypes.func.isRequired,
};

export default contactList;
