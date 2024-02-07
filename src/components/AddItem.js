import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const AddItem = () => {
  const [itemName, setItemName] = useState();
  const [itemNutri, setItemNutri] = useState();
  const dispatch = useDispatch();

  const onChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const onChangeItemNutri = (e) => {
    setItemNutri(e.target.value);
  };

  const itemSubmit = () => {
    if (itemName !== "" && itemNutri !== "") {
      dispatch({
        type: "ITEM_SUBMIT",
        payload: { itemName, itemNutri },
      });
      setItemName("");
      setItemNutri("");
    } else {
      alert("모든 값을 입력해주세요");
    }
  };

  return (
    <Wrap>
      <Input
        value={itemName || ""}
        onChange={onChangeItemName}
        type="text"
        placeholder="항목을 입력하세요"
        style={{ width: 292 }}
      />
      <Input
        value={itemNutri || ""}
        onChange={onChangeItemNutri}
        className="addItemNutri"
        type="number"
        placeholder="영양성분 (숫자만 입력) g"
        style={{ width: 238 }}
      />
      <AddButton onClick={itemSubmit}>추가하기</AddButton>
    </Wrap>
  );
};

export default AddItem;

const Wrap = styled.div`
  width: 690px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 164px;
  }
`;
const Input = styled.input`
  background: #fff;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  height: 100%;
  padding-left: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: 100% !important;
    height: 44px;
    font-size: 14px;
  }
`;
const AddButton = styled.button`
  width: 132px;
  height: 100%;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  background: ${(props) => props.theme.subColor};
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 44px;
    font-size: 14px;
  }
`;
