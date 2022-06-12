import proptypes from 'proptypes';
import s from './contactList.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={e => {
          onDelete(e.target.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.prototype = {
  contact: proptypes.shape({
    id: proptypes.string.isRequired,
    name: proptypes.string.isRequired,
    number: proptypes.string.isRequired,
  }),
  onDelete: proptypes.func.isRequired,
};

export { ContactItem };
