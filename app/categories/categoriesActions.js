import { useDispatch } from "react-redux";

export const updateAndAddedNewCategory = (category, categories, dispatch) => {
  let restedCategories = [];
  if (category._id) {
    restedCategories = categories.filter((cat) => cat._id !== category._id);
  }
  restedCategories = [...restedCategories, category];
  dispatch(updateCategory(restedCategories));
};
