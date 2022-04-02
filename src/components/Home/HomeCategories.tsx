import { memo, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/feauthers/home/homeSlise";

export type categoryType = {
  id: number;
  name: string;
};

const HomeCategories = () => {
  const [category, setCategorys] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((res: any) => setCategorys(res.data));
  }, []);
  console.log(category);

  return (
    <div className="Category">
      <select name="Category" id="">
        {category.map(({ name, id }) => {
          return (
            <option  key={id} onClick={()  =>  dispatch(setCategory(id))}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default memo(HomeCategories);
