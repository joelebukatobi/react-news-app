export const Input = ({ placeholder, value, type, name, onChange }) => {
  return <input value={value} type={type} name={name} placeholder={placeholder} onChange={onChange} />;
};
