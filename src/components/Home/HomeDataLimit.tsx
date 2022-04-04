import { useDispatch } from "react-redux";
import { setLimit } from "../../redux/feauthers/home/homeSlise";

const HomeDataLimit = () => {
  const dispatch = useDispatch();
  return (
    <div className="homeDatalimit">
      <button type="button" onClick={() => dispatch(setLimit(10))}>
        Show more
      </button>
    </div>
  );
};
export default HomeDataLimit;
