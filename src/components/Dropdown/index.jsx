import { useState } from "react";
import { ChevronUp, ChevronDown } from "@ricons/fa";

export default function Dropdown({ title, informations }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
      >
        <div className="dropdown-header__title">{title}</div>
        <div className="dropdown-header__arrow rotate">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <div className={isOpen ? "content" : "close"}>
        {Array.isArray(informations) ? (
          <ul>
            {informations.map((equipment, index) => (
              <li key={`${equipment} - ${index}`}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{informations}</p>
        )}
      </div>
    </div>
  );
}
