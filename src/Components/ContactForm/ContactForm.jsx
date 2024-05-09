import css from "./ContactForm.module.css";
import { useId } from "react";

export default function ContactForm({ addContact }) {
  const nameLabelId = useId();
  const telephoneLabelId = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    values.id = Date.now();
    addContact(values);
  };

  return (
    <>
      <form className={css.form} action="">
        <label htmlFor={nameLabelId}>
          <p className={css.label}>Name</p>
          <input className={css.input} type="text" name="name" />
        </label>
        <label htmlFor={telephoneLabelId}>
          <p className={css.label}>Number</p>
          <input className={css.input} type="text" name="number" />
        </label>
        <button className={css.add_btn} type="submit" onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>
    </>
  );
}
