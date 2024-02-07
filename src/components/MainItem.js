import "../App.css";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import binIcon from "../assets/bin.png";

const MainItem = ({ item }) => {
  const dispatch = useDispatch();
  const mainItemDelete = () => {
    dispatch({
      type: "MAIN_ITEM_DELETE",
      payload: { item: item, nutrition: item.nutrition },
    });
  };

  return (
    <Wrap>
      <Contents>
        <Text>{item.name}</Text>
        <Text>{item.nutrition}g</Text>
      </Contents>
      <DeleteButton onClick={mainItemDelete} className="mainItemDeleteBtn">
        <span></span>
      </DeleteButton>
    </Wrap>
  );
};

export default MainItem;

const Wrap = styled.div`
  width: 640px;
  height: 56px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (max-width: 769px) {
    width: 100%;
    height: 44px;
    justify-content: center;
    gap: 14px;
    margin-bottom: 14px;
  }
`;
const Contents = styled.div`
  width: 574px;
  height: 100%;
  padding: 0 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.subColor};
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: 100%;
    font-size: 14px;
    flex: 1;
  }
`;
const Text = styled.span`
  font-size: 20px;
  height: 100%;
  line-height: 56px;
  @media screen and (max-width: 769px) {
    font-size: 14px;
    line-height: 44px;
  }
`;
const DeleteButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.deleteButtonColor};
  box-shadow: ${(props) => props.theme.shadow};
  span {
    width: 24px;
    height: 24px;
    display: block;
    background: url(${binIcon}) no-repeat center center / cover;
  }
  @media screen and (max-width: 769px) {
    width: 44px;
    height: 44px;
  }
`;
