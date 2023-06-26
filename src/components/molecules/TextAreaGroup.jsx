import { Label } from '@/components/atoms/Label';
import { TextArea } from '@/components/atoms/TextArea';

export const TextAreaGroup = ({ label, children, id, placeholder }) => {
  return (
    <div aria-label="input-group">
      <div className="relative">
        <Label>{label}</Label>
        <TextArea placeholder={placeholder} id={id}>
          {children}
        </TextArea>
      </div>
    </div>
  );
};
