import css from "./SearchBox.module.css";

export default function SearchBox({ searchTerm, onSearch }) {
  return (
    <div>
      <label className={css.label}>
        <p>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          value={searchTerm}
          onChange={onSearch}
        />
      </label>
    </div>
  );
}
