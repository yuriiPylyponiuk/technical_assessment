import Link from "next/link";
import React from "react";
import "./style.css";

function SecondTask() {
  return (
    <div>
      <div className="interfaces">
        <div className="info">
          <p>
            Down below you can find two links to teacher and student mockup
            interfaces. Without any backend functionality just visualisation.
            <br />
            <br />
            Start Attendance by clicking the button in the Teacher Interface. A
            code will be generated for the student page, which will be displayed
            on the Student Interface until the teacher ends the attendance by
            clicking the corresponding button.
          </p>
        </div>
        <div className="navig">
          <Link href={"/teacher"}>Teacher Interface</Link>
          <Link href={"/student"}>Student Interface</Link>
        </div>
      </div>
      <article>
        <h1>Backend Functionality</h1>
        <ol type="1">
          <li>
            <h2>Starting and Ending Attendance:</h2>
            <ul>
              <li>
                API Endpoints: Create API endpoints that educators can use to
                start and end attendance tracking for a specific lecture within
                a course.
              </li>
              <li>
                Business Logic: Implement the business logic to record the start
                and end times of attendance tracking for lectures. Update the
                lecture record in the database to indicate whether attendance
                tracking is active or completed.
              </li>
            </ul>
          </li>
          <li>
            <h2>Generating Unique Attendance Codes:</h2>
            <ul>
              <li>
                Code Generation: Develop a mechanism to generate unique and
                secure attendance codes for each lecture. These codes should be
                hard to predict and expire after a certain time.
              </li>
              <li>
                Code Storage: Store these generated codes in the database,
                associating them with the corresponding lecture.
              </li>
            </ul>
          </li>
          <li>
            <h2>Validating Student Attendance:</h2>
            <ul>
              <li>
                API Endpoint: Create an API endpoint where students can submit
                the attendance code.
              </li>
              <li>
                Code Validation: Implement code validation logic to ensure that
                the entered code is valid, not expired, and matches an active
                lecture.
              </li>
              <li>
                Recording Attendance: Once a valid code is submitted, mark the
                student`s attendance for the corresponding lecture in the
                database.
              </li>
            </ul>
          </li>
          <li>
            <h2>Displaying the Attendance Code:</h2>
            <ul>
              <li>
                Educator Interface: Provide an API endpoint or mechanism for
                educators to retrieve the generated attendance code for display
                in their interface.
              </li>
            </ul>
          </li>
          <li>
            <h2>Security and Authentication:</h2>
            <ul>
              <li>
                Authentication: Ensure that API endpoints and actions related to
                starting, ending, and submitting attendance are secure and
                require proper authentication. Only authorized educators and
                students should have access.
              </li>
              <li>
                Data Validation: Implement data validation to prevent
                unauthorized access or injection attacks.
              </li>
            </ul>
          </li>
          <li>
            <h2>Error Handling:</h2>
            <ul>
              <li>
                Error Messages: Provide meaningful error messages in case of
                invalid codes, unauthorized access, or other issues.
              </li>
            </ul>
          </li>
          <li>
            <h2>Testing:</h2>
            <ul>
              <li>
                Thoroughly test the backend functionalities, including unit
                tests, integration tests, and end-to-end tests, to ensure
                reliability and correctness.
              </li>
            </ul>
          </li>
        </ol>
      </article>
    </div>
  );
}

export default SecondTask;
