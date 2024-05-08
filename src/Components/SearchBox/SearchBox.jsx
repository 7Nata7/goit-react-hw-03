import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div>
      <form action="">
        <label className={css.label} htmlFor="">
          <p>Find contacts by name</p>
          <input className={css.input} type="text" />
        </label>
      </form>
    </div>
  );
}