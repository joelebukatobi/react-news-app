export const Button = ({ children, type, svg, disabled, onClick }) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {svg}
      {children}
    </button>
  );
};
