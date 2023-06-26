export const Button = ({ children, svg, disabled, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {svg}
      {children}
    </button>
  );
};
