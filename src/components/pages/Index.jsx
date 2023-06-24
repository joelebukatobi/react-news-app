import React from 'react';

import { Button } from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { Input } from '@/components/atoms/Input';
import { Select } from '@/components/atoms/Select';
import { Option } from '@/components/atoms/Option';
import { InputGroup } from '@/components/molecules/InputGroup';
import { FormRow } from '@/components/molecules/FormRow';
import { Navbar } from '@/components/organisms/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <section className="container flex flex-col h-[100vh] w-[100vw] justify-center items-center space-y-[.8rem]">
        <h1 className="font-bold">Hello World</h1>
        <p>A SCSS, TailwindCSS, Alpine, React and Vite Boilerplate</p>

        <div className="space-y-[1.6rem] w-2/5">
          <InputGroup>
            <Label htmlFor={'Test'}>Test Label</Label>
            <Input placeholder={'Enter an appropriate text'} />
          </InputGroup>
          <FormRow>
            <InputGroup>
              <Label htmlFor={'Test'}>Test Label</Label>
              <Input placeholder={'Enter an appropriate text'} />
            </InputGroup>
            <InputGroup>
              <Label htmlFor={'Actors'}>Artists</Label>
              <Select>
                <Option value="JM">John Mayer</Option>
                <Option value="JH">Jimi Hendrix</Option>
                <Option value="AK">Albert King</Option>
                <Option value="BG">Buddy Guy</Option>
              </Select>
            </InputGroup>
          </FormRow>
          <Button
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth=""
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          >
            Button
          </Button>
        </div>
      </section>
    </>
  );
};

export default App;
