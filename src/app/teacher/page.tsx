"use client";
import EducatorInterface from "@/features/Teacher";

function EducatorPage() {
  return (
    <div className="educator-interface">
      <EducatorInterface
        onStartAttendance={function (userCode: string): void {
          localStorage.setItem("code", userCode);
          alert("Start attendance");
        }}
        onEndAttendance={function (): void {
          localStorage.removeItem("code");
          alert("End Attendance");
        }}
        attendanceCode={""}
      />
    </div>
  );
}

export default EducatorPage;
