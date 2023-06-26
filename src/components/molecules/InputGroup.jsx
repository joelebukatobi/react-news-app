import React from 'react';
import { Label } from '@/components/atoms/Label';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

export const InputGroup = ({ label, placeholder, svg }) => {
  return (
    <div aria-label="input-group">
      <div className="relative">
        <Label>{label}</Label>
        <Input placeholder={placeholder} />
        <span>
          <Button>{svg}</Button>
        </span>
      </div>
    </div>
  );
};
