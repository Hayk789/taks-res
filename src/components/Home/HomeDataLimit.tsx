import { useDispatch } from "react-redux";
import { setLimit } from "../../redux/feauthers/home/homeSlise";
import { useAppSelector } from "../../redux/hook";

const HomeDataLimit = () => {
  const { limit } = useAppSelector(({ homeReducer }) => ({
    limit: homeReducer.limit,
  }),
  
  );
  const dispatch = useDispatch();
 

  return (
    <div className="homeDatalimit">
      <button onClick={() => dispatch(setLimit(limit + 10))}>Show more</button>
    </div>
  );
};
export default HomeDataLimit;
