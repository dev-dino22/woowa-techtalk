import SelectOption from "./SelectOption";
import ArrowSvg from "./assets/ArrowSvg";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface SelectBoxProps<T> {
  title?: string;
  description?: string;
  placeholder: string;
  options: T[];
  autoFocus?: boolean;
  onSelectHandler?: (value: T) => void;
}

interface SelectState<T> {
  selectedOption: T | null;
  isOpened: boolean;
}

const SelectBox = <T extends {}>({
  onSelectHandler,
  placeholder,
  title,
  description,
  options,
  autoFocus,
}: SelectBoxProps<T>) => {
  const [selectState, setSelectState] = useState<SelectState<T>>({
    isOpened: false,
    selectedOption: null,
  });

  function onClickHandler() {
    setSelectState((prev) => ({
      ...prev,
      isOpened: !prev.isOpened,
    }));
  }

  useEffect(() => {
    if (onSelectHandler && selectState.selectedOption !== null) {
      onSelectHandler(selectState.selectedOption);
    }
  }, [selectState.selectedOption]);

  return (
    <S.Container>
      <S.TitleBox>
        {title && <S.Title className="tx-xl">{title}</S.Title>}
        {description && <S.Description className="tx-md">{description}</S.Description>}
      </S.TitleBox>

      <S.Selector
        type="button"
        onClick={onClickHandler}
        className={selectState.selectedOption === null ? "" : "selected"}
        autoFocus={autoFocus}
      >
        <span>
          {selectState.selectedOption === null
            ? placeholder
            : String(selectState.selectedOption)}
        </span>
        <ArrowSvg
          color={selectState.selectedOption === null ? "#acacac" : "black"}
          isOpened={selectState.isOpened}
        />
      </S.Selector>
      {selectState.isOpened && (
        <SelectOption options={options} setSelectState={setSelectState} />
      )}
    </S.Container>
  );
};

export default SelectBox;

const S = {
  Container: styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
  `,
  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Title: styled.label``,
  Description: styled.p`
    color: ${({theme}) => theme.PALETTE.gray[40]};
  `,
  Selector: styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 12px 8px;
    border: 1px solid ${({theme}) => theme.PALETTE.gray[60]};

    background: none;

    color: ${({theme}) => theme.PALETTE.gray[40]};
    border-radius: 4px;
    cursor: pointer;

    &.selected {
      color: ${({theme}) => theme.PALETTE.gray[95]};
    }
  `,
};
