import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number, category },
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={css.list_item} key={id}>
      <div className={css.flex}>
        <p>
          <span className={css.image}>
            <AiOutlineUser size={18} color={"#18572e"} />
          </span>
          {name}
        </p>
        <p>{category}</p>
        <p>
          <span className={css.image}>
            <MdOutlineLocalPhone size={18} color={"#18572e"} />
          </span>
          {number}
        </p>
      </div>

      <button className={css.delete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
