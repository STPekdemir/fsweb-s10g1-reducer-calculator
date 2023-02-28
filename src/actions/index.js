export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_MR = "MEMORY_MR";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const addOne = () => {
  return { type: ADD_ONE };
};
export const changeOperation = (islem) => {
  return { type: CHANGE_OPERATION, payload: islem };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};
export const memoryMR = () => {
  return { type: MEMORY_MR };
};
export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
