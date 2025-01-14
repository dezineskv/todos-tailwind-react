import { useState, useContext } from 'react'
import { TfiAgenda, TfiAlarmClock, TfiCalendar, TfiListOl, TfiLayoutListThumbAlt } from "react-icons/tfi";
import { TodosContext } from '../App';
import { RiH5 } from 'react-icons/ri';

function Sidebar() {
    const [all, setAll] = useState("all");
    // console.log("all:", all)
    // const [today, SetToday] = useState("today");

    // const getTodos = useContext(TodosContext);


  return (
    <>
      <div className="sidebar">
        {/* {getTodos} */}
        <h3 className="sidebar-w pt-4">
          <TfiAgenda style={{ marginTop: "4px" }} />
          &nbsp;&nbsp;To-Dos
        </h3>
        <hr></hr>
        <div className="task-icons">
          <a
            onClick={(e) => {
              e.preventDefault();
              setAll(today);
            }}
            href=""
          >
            <div className="sidebar-w pt-4">
              <TfiAlarmClock style={{ marginTop: "4px" }} /> &nbsp;&nbsp;Today
            </div>
          </a>
        </div>
        {/* {getTodos} */}
        <div className="task-icons">
          <a
            onClick={(e) => {
              e.preventDefault();
              setAll(all);
            }}
            href=""
          >
            <h4 className="sidebar-w pt-4">
              <TfiCalendar style={{ marginTop: "4px" }} />
              &nbsp;&nbsp;Next 7 Days
            </h4>
          </a>
        </div>
        <div className="task-icons">
          <a
            onClick={(e) => {
              e.preventDefault();
              setAll(all);
            }}
            href=""
          >
            <h4 className="sidebar-w pt-4">
              <TfiListOl style={{ marginTop: "4px" }} /> &nbsp;&nbsp;Show All
            </h4>
          </a>
        </div>
        <div className="task-icons">
          <a
            onClick={(e) => {
              e.preventDefault();
              setAll(all);
            }}
            href=""
          >
            <div className="sidebar-w pt-4">
              <TfiLayoutListThumbAlt style={{ marginTop: "4px" }} />{" "}
              &nbsp;&nbsp;Status
            </div>
          </a>
        </div>
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

export default Sidebar