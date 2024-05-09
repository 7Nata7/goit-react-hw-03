import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contact, onDelete }) {
  return (
    <ul className={css.list}>
      {contact.map((contact) => {
        return (
          <Contact key={contact.id} onDelete={onDelete} contact={contact} />
        );
      })}
    </ul>
  );
}
