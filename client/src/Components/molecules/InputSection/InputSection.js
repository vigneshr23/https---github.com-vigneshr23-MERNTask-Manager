import React from 'react';
import TextInput from '../../atoms/TextInput';

const InputSection = ({
  onTitleChange,
  onDescriptionChange,
  title,
  description,
}) => (
  <>
    <TextInput onChange={onTitleChange} value={title} placeholder={"Title"} />
    <TextInput
      onChange={onDescriptionChange}
      value={description}
      placeholder={"Description"}
    />
  </>
);

export default InputSection;
