import { Transition } from "@headlessui/react";
import { useState } from "react";
const Collabsible = ({ startsOpen, title, children }) => {
  const [open, setOpen] = useState(startsOpen || false);
  return (
    <div>
      <button
        className="my-2 p-2 w-full border-2 border-purple-500 rounded-md focus:outline-none"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-left text-2xl">{title}</h3>
      </button>
      <Transition
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={open}
        className="py-2"
      >
        {children}
      </Transition>
    </div>
  );
};

export default Collabsible;
