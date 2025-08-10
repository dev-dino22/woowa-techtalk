import styled from "@emotion/styled";

interface SelectState<T> {
  selectedOption: T | null;
  isOpened: boolean;
}

interface SelectOptionProps<T> {
  options: T[];
  setSelectState: React.Dispatch<React.SetStateAction<SelectState<T>>>;
}

const SelectOption = <T extends {}>({
  options,
  setSelectState,
}: SelectOptionProps<T>) => {
  function onClickHandler(option: T) {
    setSelectState({
      selectedOption: option,
      isOpened: false,
    });
  }

  return (
    <S.Container>
      {options.map((option, index) => (
        <S.Item
          key={index}
          onClick={() => onClickHandler(option)}
        >
          {String(option)}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default SelectOption;

const S = {
  Container: styled.ul`
    width: 100%;
    position: absolute;
    top: 60px;

    border: 1px solid ${({theme}) => theme.PALETTE.gray[60]};
    box-sizing: border-box;

    background-color: ${({theme}) => theme.PALETTE.gray[0]};

    color: ${({theme}) => theme.PALETTE.gray[40]};
    border-radius: 4px;
  `,
  Item: styled.li`
    padding: 8px 10px;

    &:hover {
      background-color: var(--light-grey);
    }
  `,
};
