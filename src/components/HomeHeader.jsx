import {
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { Link } from "react-router";

const HomeHeader = () => {
  const divRef = useRef(null);
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    const el = divRef.current;
    el.classList.remove("more-active");

    // Trigger reflow to reset the animation
    void el.offsetWidth;

    el.classList.add("more-active");
  };
  return (
    <div className="home-header">
      <button onClick={() => toggleShowMore()} className="home-header__btn">
        <EllipsisVerticalIcon />

        <div
          ref={divRef}
          className={"more-active " + (isShowMore ? " " : "hide-more-active")}
        >
          <Link to={"/creategroup"}>
            <p>Create Group</p>
          </Link>
          <Link to={"/adddevice"}>
            <p>Linked Devices</p>
          </Link>
          <Link to={"/starred"}>
            <p>Starred Messages</p>
          </Link>
          <Link to={"/settings"}>
            <p>Settings</p>
          </Link>
        </div>
      </button>
      <button className="home-header__logo">
        <PaperAirplaneIcon className="paperAirplaneIcon" />
        <TableCellsIcon className="tableCellsIcon" />
      </button>
      <div className="sortAndFilter">
        <button className="home-header__btn">
          <AdjustmentsHorizontalIcon />
        </button>
        <button className="home-header__btn">
          {" "}
          <FunnelIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
