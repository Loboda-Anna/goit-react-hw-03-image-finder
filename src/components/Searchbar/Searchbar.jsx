import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.search.value;
    onSubmit(inputValue);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button
          className={css.SearchForm__button}
          type="submit"
          disabled={isSubmitting}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#3f51b5"
              viewBox="0 0 24 24"
            >
              <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
            </svg>
          </span>
        </button>

        <input
          className={css.SearchForm__input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};
