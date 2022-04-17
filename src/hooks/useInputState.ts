import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialVal: any) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
