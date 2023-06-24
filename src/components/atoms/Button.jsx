export const Button = ({ children, svg }) => {
  return (
    <button>
      {svg}
      {children}
    </button>
  );
};
