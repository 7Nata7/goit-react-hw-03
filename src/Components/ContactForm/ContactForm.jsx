import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <>
      <form className={css.form} action="">
        <label htmlFor="">
          <p className={css.label}>Name</p>
          <input className={css.input} type="text" name="name" />
        </label>
        <label htmlFor="">
          <p className={css.label}>Number</p>
          <input className={css.input} type="text" name="number" />
        </label>
        <button className={css.add_btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
