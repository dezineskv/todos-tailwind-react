import { useState } from "react";
import {
  TfiAlarmClock,
  TfiLayoutListThumbAlt,
  TfiPlus,
  TfiSearch,
  TfiPencil,
} from "react-icons/tfi";
import { Link } from "react-router-dom";

function Sidebar() {
  const [all, setAll] = useState("all");

  return (
    <>
      <div className="sidebar">
        {/* {getTodos} */}
        <Link to="/">
          <h3 className="sidebar-w pt-4">To-Dos Agenda</h3>
        </Link>
        <hr></hr>
        <div className="task-icons">
          <Link to="/add">
            <div className="sidebar-w pt-4">
              <TfiPlus style={{ marginTop: "4px" }} /> &nbsp;&nbsp;Add Tasks
            </div>
          </Link>
        </div>
        <div className="task-icons">
          <Link to="/today">
            <div className="sidebar-w pt-4">
              <TfiAlarmClock style={{ marginTop: "4px" }} /> &nbsp;&nbsp;Today's
              Tasks
            </div>
          </Link>
        </div>
        <div className="task-icons">
          {/* <a
            onClick={(e) => {
              e.preventDefault();
              setAll(all);
            }}
            href=""
          > */}
          <Link to="/next7">
            <h4 className="sidebar-w pt-4">
              <TfiSearch style={{ marginTop: "4px" }} />
              &nbsp;&nbsp;Next 7 Days
            </h4>
          </Link>
        </div>
        <div className="task-icons">
          <Link to="/edit">
            <h4 className="sidebar-w pt-4">
              <TfiPencil style={{ marginTop: "4px" }} /> &nbsp;&nbsp;All Tasks
            </h4>
          </Link>
        </div>
        <div className="task-icons">
          <Link to="/status">
            <div className="sidebar-w pt-4">
              <TfiLayoutListThumbAlt style={{ marginTop: "4px" }} />
              &nbsp;&nbsp;Status
            </div>
          </Link>
        </div>
        {/* <div className="task-icons">
          <Link to="/show-all">
            <div className="sidebar-w pt-4">
              <TfiLayoutListThumbAlt style={{ marginTop: "4px" }} />
              &nbsp;&nbsp;All Tasks
            </div>
          </Link>
        </div> */}
        {/* <All></All> */}
        {/* <div className="home-page">
            {
                all === 'all' && <Today></Today>
            }
              {
                all === 'today' && <Today></Today>
            }
</div> */}
      </div>
    </>
  );
}

export default Sidebar;
