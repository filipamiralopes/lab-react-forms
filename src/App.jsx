import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameInput = (event) => {
    setfullName(event.target.value);
  };
  const handleImageInput = (event) => {
    setImage(event.target.value);
  };
  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleProgramInput = (event) => {
    setProgram(event.target.value);
  };
  const handleGraduationYearInput = (event) => {
    setGraduationYear(event.target.value);
  };
  const handleGraduatedInput = (event) => {
    setGraduated(event.target.value);
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    setStudents([...students, newStudent]);
    // clear form
    setfullName("")
    setImage("")
    setPhone("")
    setEmail("")
    setProgram("-- None --") // select inputs should have the string value of the first option set as the default value (???)
    setGraduationYear(0)
    setGraduated(false)
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameInput}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleImageInput}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneInput}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailInput}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramInput}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2018}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleGraduatedInput}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;

/*
{
  fullName: "Ian Iverson";
  email: "ian.iverson@example.com";
  phone: "123-456-7890";
  program: "example";
  image: "
  https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-6.png
  ";
  graduationYear: 2023;
  graduated: true;
 }
 */
