import { Quote } from "../components/Quote";
import { Auth } from "./Auth";

export const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth></Auth>
      </div>
      <div className="invisible lg:visible">
        {/* when it becomes small then the Quote is hidden and only the next element is shown. */}
        <Quote />
      </div>
    </div>
  );
};
