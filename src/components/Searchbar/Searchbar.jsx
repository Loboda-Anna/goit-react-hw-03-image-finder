import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.search.value;
    onSubmit(inputValue);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button className={css.SearchForm__button} type="submit" disabled={isSubmitting} >
          <span className={css.SearchForm__button__label}>Search</span>
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

