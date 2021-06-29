import { InputDiv, StyledInput, InputLabel, InputError } from './Input.styles';

function Input({ label, error, ...props }) {
  return (
    <InputDiv>
      <InputLabel htmlFor={label.trim()}>{label}:</InputLabel>
      <StyledInput id={label.trim()} {...props} />
      {error && <InputError>{error}</InputError>}
    </InputDiv>
  );
}

export default Input;
