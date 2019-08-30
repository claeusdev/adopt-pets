import React, { useState } from "react";

function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select
          name=""
          id={id}
          onChange={e => setState(e.currentTarget.value)}
          onBlur={e => setState(e.currentTarget.value)}
          disabled={options.length === 0}
        >
          <option value="all">All</option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return [state, Dropdown, setState];
}

export default useDropdown;
