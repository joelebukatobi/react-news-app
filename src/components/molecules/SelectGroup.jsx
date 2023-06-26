import { Label } from '@/components/atoms/Label';
import { Select } from '@/components/atoms/Select';

export const SelectGroup = ({ label, name, id, value, option }) => {
  return (
    <div aria-label="input-group">
      <div className="relative">
        <Label>{label}</Label>
        <Select name={name} id={id} value={value}>
          {option}
        </Select>
      </div>
    </div>
  );
};
