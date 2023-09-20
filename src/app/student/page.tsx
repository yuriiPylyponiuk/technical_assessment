"use client";
import StudentInterface from "@/features/Student";

function StudentPage() {
  return (
    <div className="student-interface">
      <StudentInterface
        url={""}
        onAttendanceSubmit={function (code: string): void {
          alert(`Correct code: ${code}`);
        }}
        attendanceConfirmation={""}
      />
    </div>
  );
}

export default StudentPage;
