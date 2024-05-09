import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(15, "Number must be at most 15 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      addContact(newContact);
      resetForm();
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        <p className={css.label}>Name</p>
        <input
          className={css.input}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <div className={css.error}>{formik.errors.name}</div>
        )}
      </label>
      <label htmlFor="number">
        <p className={css.label}>Number</p>
        <input
          className={css.input}
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.errors.number && formik.touched.number && (
          <div className={css.error}>{formik.errors.number}</div>
        )}
      </label>
      <button className={css.add_btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
