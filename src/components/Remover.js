import React from "react";

const Remover = ({ close, disabled = false }) => (
  <button
    className="remover"
    onClick={close}
    disabled={disabled}
    aria-label="Close dialog"
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="icon icon-tabler icon-tabler-x"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  </button>
);

export default Remover;
