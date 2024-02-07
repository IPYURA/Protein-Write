const initialState = {
  mainData: [],
  markData: [],
  sumNutrition: 0,
  goal: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ITEM_SUBMIT": {
      state.mainData.push({
        name: payload.itemName,
        nutrition: payload.itemNutri,
      });
      state.sumNutrition += Number(payload.itemNutri);
      localStorage.setItem("SUM", JSON.stringify(state.sumNutrition));
      break;
    }
    case "MAIN_ITEM_DELETE": {
      const newArr = state.mainData.filter((it) => it !== payload.item);
      state.sumNutrition -= payload.nutrition;
      localStorage.setItem("SUM", JSON.stringify(state.sumNutrition));
      return { ...state, mainData: newArr };
    }
    case "LOAD_MARK": {
      state.markData = [...payload.storedMarkData];
      break;
    }
    case "ADD_MARK": {
      state.markData.length < 5
        ? state.markData.push({
            name: payload.itemName,
            nutrition: payload.itemNutri,
          })
        : alert("즐겨찾기는 5개까지만 가능합니다.");
      localStorage.setItem("MARK", JSON.stringify(state.markData));
      break;
    }
    case "ADD_TO_MAIN": {
      state.mainData.push({
        name: payload.name,
        nutrition: payload.nutrition,
      });
      state.sumNutrition += Number(payload.nutrition);
      localStorage.setItem("SUM", JSON.stringify(state.sumNutrition));
      break;
    }
    case "MARK_ITEM_DELETE": {
      const newArr = state.markData.filter((it) => it !== payload.item);
      localStorage.setItem("MARK", JSON.stringify(newArr));
      return { ...state, markData: newArr };
    }
    case "SET_GOAL": {
      state.goal = payload.goalText;
      break;
    }
    default: {
      return { ...state };
    }
  }
  return { ...state };
};

export default reducer;
