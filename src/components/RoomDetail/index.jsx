import "./style.css";
import { useState } from "react";

export const RoomDetail = ({ id, img, popis }) => {
    const [roomChoose, setRoomChoose] = useState()
  return (
    <div key={id} onChoose className="column">
      <img src={img} />
      <p>
        {popis}
      </p>
    </div>
  );
};
