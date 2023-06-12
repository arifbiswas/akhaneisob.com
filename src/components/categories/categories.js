import CategoriesCard from "./categoriesCard";
import data from "./data.json";
import { useDispatch, useSelector } from "react-redux";
const Categories = () => {
  // const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories);
  // console.log(categories);

  return (
    <div className="max-h-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 justify-items-center">
      {categories?.map((item, i) => (
        <CategoriesCard key={item.id || i} data={item} />
      ))}
    </div>
  );
};

export default Categories;
