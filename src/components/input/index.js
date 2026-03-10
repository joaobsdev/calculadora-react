import { InputContainer } from './styles';

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} key={value} />
    </InputContainer>
  );
};

export default Input;