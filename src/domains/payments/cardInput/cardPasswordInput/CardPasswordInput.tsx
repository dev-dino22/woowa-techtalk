
import Input from "../../../../shared/components/actions/inputField/input/Input";
import InputField from "../../../../shared/components/actions/inputField/InputField";
import { CARD_INFO } from "../../../../shared/components/three/CardPreview";
import { usePasswordInput } from "./usePasswordInput";

function CardPasswordInput({
  onSuccessValidate,
}: {
  onSuccessValidate: (isValid: boolean) => void;
}) {
  const { feedbackMessage, onChangeHandler } =
    usePasswordInput(onSuccessValidate);

  return (
    <InputField
      title="비밀번호를 입력해 주세요."
      label="비밀번호 앞 2자리"
      feedbackMessage={feedbackMessage}
    >
      <Input
        type="password"
        name="cardPassword"
        maxLength={CARD_INFO.PASSWORD_LENGTH}
        onChange={onChangeHandler}
        isValid={feedbackMessage === ""}
        autoFocus
      />
    </InputField>
  );
}

export default CardPasswordInput;
