import { useDispatch, useSelector } from 'react-redux';

import { selectDeletingIds } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);

  const handleDelete = () => {
    if (!isDeleting) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <div>
          <span className={styles.icon}>
            <FaUser />
          </span>
          <span className={styles.name}>{name}</span>
        </div>
        <div>
          <span className={styles.icon}>
            <FaPhoneAlt />
          </span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}{' '}
      </button>
    </li>
  );
};

export default Contact;
