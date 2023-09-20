"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

interface EducatorInterfaceProps {
  onStartAttendance: (userCode: string) => void;
  onEndAttendance: () => void;
  attendanceCode: string;
}

const EducatorInterface: React.FC<EducatorInterfaceProps> = ({
  onStartAttendance,
  onEndAttendance,
  attendanceCode,
}) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (attendanceCode === "") setCode(uuidv4());
  }, []);

  return (
    <div className="educator-interface">
      <h1>Teacher</h1>
      <div className="attendance-code">
        Attendance Code: {code}
        <button onClick={() => setCode(uuidv4())}>Refresh code</button>
      </div>
      <p className="attendance-code">Tools:</p>
      <button onClick={() => onStartAttendance(code)}>Start Attendance</button>
      <button onClick={onEndAttendance}>End Attendance</button>
    </div>
  );
};

export default EducatorInterface;
