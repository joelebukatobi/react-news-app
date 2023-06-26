export const TextArea = ({ placeholder, id, children }) => {
  return (
    <textarea placeholder={placeholder} id={id}>
      {children}
    </textarea>
  );
};
