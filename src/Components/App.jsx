import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contactData from "../Components/contact.json";

export default function App() {
  const [contacts, setContacts] = useState(contactData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
