import {
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";

const HomeHeader = () => {
  const [isShowMore, setIsShowMore] = useState(true);

  return (
    <div className="home-header">
      <button
        onClick={() => setIsShowMore(!isShowMore)}
        className="home-header__btn"
      >
        <EllipsisVerticalIcon />
        {isShowMore && (
          <div className="more-active">
            <Link to={"/creategroup"}>
              <p>Create Group</p>
            </Link>
            <Link to={"/adddevice"}>
              <p>Linked Devices</p>
            </Link>
            <Link to={"/settings"}>
              <p>Starred Messages</p>
            </Link>
            <Link to={"/starred"}>
              <p>Settings</p>
            </Link>
          </div>
        )}
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
