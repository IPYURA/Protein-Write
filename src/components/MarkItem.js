import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import binIcon from "../assets/bin.png";
import addIcon from "../assets/plus.png";

const MarkItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToMain = () => {
    dispatch({
      type: "ADD_TO_MAIN",
      payload: { name: item.name, nutrition: item.nutrition },
    });
  };
  const markItemDelete = () => {
    dispatch({ type: "MARK_ITEM_DELETE", payload: { item } });
  };
  return (
    <Wrap>
      <MarkItemContent>
        <Text>{item.name}</Text>
        <Text>{item.nutrition}g</Text>
      </MarkItemContent>
      <AddButton onClick={addToMain}>
        <AddIcon />
      </AddButton>
      <DeleteButton onClick={markItemDelete}>
        <DeleteIcon />
      </DeleteButton>
    </Wrap>
  );
};

export default React.memo(MarkItem);

const Wrap = styled.div`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  @media screen and (max-width: 769px) {
    justify-content: center;
    gap: 14px;
    margin-bottom: 14px;
  }
`;
const MarkItemContent = styled.div`
  width: 356px;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.subColor};
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: 100%;
    flex: 1;
  }
`;
const Text = styled.span`
  font-size: 16px;
`;
const ButtonStyle = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow};
`;
const AddButton = styled(ButtonStyle)`
  background: ${(props) => props.theme.plusButtonColor};
`;
const AddIcon = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background: url(${addIcon}) no-repeat center center / cover;
`;
const DeleteButton = styled(ButtonStyle)`
  background: ${(props) => props.theme.deleteButtonColor};
`;
const DeleteIcon = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  background: url(${binIcon}) no-repeat center center / cover;
`;
