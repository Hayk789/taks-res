import { FC, memo } from "react";
import { IImgType } from "./model";

 const Image: FC<IImgType> = ({ img,}) => (
  <div className="img_container"> 
    <img src={img} alt={img} />
  </div>
);

export default memo(Image)