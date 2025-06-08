import {
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <button className="home-header__btn">
        {" "}
        <EllipsisVerticalIcon />
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
