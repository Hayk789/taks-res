import Image from "../ReusableComponents/Img";
import { useEffect } from "react";
import { v4 as uu_idv4 } from "uuid";
import HomeDataLimit from "./HomeDataLimit";
import { useAppSelector } from "../../redux/hook";
import HomeCategories from "./HomeCategories";
import { useDispatch } from "react-redux";
import { getImages } from "../../redux/feauthers/home/homeSlise";

const HomeImages = () => {
  const dispatch = useDispatch();
  const { data, limit, page, category } = useAppSelector(({ homeReducer }) => ({
    limit: homeReducer.limit,
    page: homeReducer.page,
    category: homeReducer.category,
    data: homeReducer.data.image,
  }));
  useEffect(() => {
    dispatch(getImages(page, category, limit));
  }, [dispatch, limit, page, category]);

  return (
    <>
      <HomeCategories />
      <div className="homeImages">
        {data.map((item: any) => (
          <div className="homeImages--content" key={uu_idv4()}>
            <Image img={`${item.url}`} />
            <div className="homeImages--content--title">
              {item.categories.map((category: { name: string; id: number }) => (
                <div key={uu_idv4()}>{category.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <HomeDataLimit />
    </>
  );
};
export default HomeImages;
