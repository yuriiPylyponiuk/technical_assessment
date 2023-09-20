"use client";
import React, { FC, useEffect, useState } from "react";
import "./style.css";

interface StudentInterfaceProps {
  url: string;
  onAttendanceSubmit: (code: string) => void;
  attendanceConfirmation: string;
}

const StudentInterface: FC<StudentInterfaceProps> = ({
  url,
  onAttendanceSubmit,
  attendanceConfirmation,
}) => {
  const [inputCode, setInputCode] = useState("");
  const [urlHand, setUrlHand] = useState(url);

  const handleSubmit = () => {
    if (inputCode === urlHand) onAttendanceSubmit(inputCode);
  };

  useEffect(() => {
    const code = localStorage.getItem("code");
    if (url === "" && code) setUrlHand(code);
  }, []);

  return (
    <div className="student-interface">
      <h1>Student</h1>
      <p>Visit the URL: {urlHand}</p>
      <input
        type="text"
        placeholder="Enter Attendance Code"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {attendanceConfirmation && (
        <div className="confirmation-message">{attendanceConfirmation}</div>
      )}
    </div>
  );
};

export default StudentInterface;
