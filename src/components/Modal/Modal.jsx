import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ tags, imageURL, onClose }) => {
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      onClose();
    }
  });

  return (
    <div className={css.Overlay}>
      <div className={css.Modal} onClick={() => onClose()}>
        <img src={imageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
