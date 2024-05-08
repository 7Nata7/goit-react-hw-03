import Contact from "../Contact/Contact";

export default function ContactList({ contact, onDelete }) {
  return (
    <ul>
      {contact.map((contact) => {
        return (
          <Contact key={contact.id} onDelete={onDelete} contact={contact} />
        );
      })}
    </ul>
  );
}
