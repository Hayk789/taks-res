import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GetCategoryData,
  setCategory,
} from "../../redux/feauthers/home/homeSlise";
import { useAppSelector } from "../../redux/hook";

const HomeCategories = () => {
  const dispatch = useDispatch();
  const { category } = useAppSelector(({ homeReducer }) => ({
    category: homeReducer.data.category,
  }));
  useEffect(() => {
    dispatch(GetCategoryData());
  }, [dispatch]);

  const onChangeHandler = (e: any) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    dispatch(setCategory(option));
  };

  return (
    <div className="Category">
      <select name="Category" id="" onChange={onChangeHandler}>
        {category.map(({ name, id }) => (
          <option key={id} id={`${id}`}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default HomeCategories;
