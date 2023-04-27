import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onHandleClick }) => {
  return (
    <button className={css.Button} onClick={() => onHandleClick()}>
      Load more
    </button>
  );
};

Button.propTypes = { onHandleClick: PropTypes.func.isRequired };
