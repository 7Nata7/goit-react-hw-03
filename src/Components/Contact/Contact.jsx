import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contact({
  contact: { id, name, number, category },
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li key={id}>
      <p>
        <span>
          <AiOutlineUser size={18} color={"#18572e"} />
        </span>
        {name}
      </p>
      <p>{category}</p>
      <p>
        <span>
          <MdOutlineLocalPhone size={18} color={"#18572e"} />
        </span>
        {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
