import React from "react";
import profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        <aside className="sidebar">
          <img src={profile} alt="Profile" className="profile-pic" />
          <section className="about">
            <h2>About Me</h2>
            <p><strong>MR KHOUNSAVANH SIHAVONG</strong></p>
            <ul>
              <li>Nickname: TIGER</li>
              <li>Date of Birth: 31 MAY 2003</li>
              <li>Sex: MALE</li>
              <li>Nationality: LAOS</li>
            </ul>
          </section>
          <section className="education">
            <h2>Education</h2>
            <p>BANGKOK UNIVERSITY</p>
            <p>School of Information Technology and Innovation, Department of Computer Science</p>
            <p>2021 - PRESENT</p>
            <p>GPA: 3.28</p>
          </section>
          <section className="languages">
            <h2>Languages</h2>
            <ul>
              <li>Thai</li>
              <li>Laos</li>
              <li>English</li>
            </ul>
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p>Phone: 097-970-2537</p>
            <p>Email: khounsavanh.siha@bumail.net</p>
            <p>Address: 4/176 Kave condo Khlong Nueng, Khlong Luang, Pathum Thani 12120</p>
          </section>
        </aside>
        <main className="content">
          <header>
            <h1>KHOUNSAVANH SIHAVONG</h1>
            <h2>FullStack, Frontend</h2>
            <p>Hello, I am a fourth-year student majoring in Computer Science at the School of Information Technology and Innovation, Bangkok University. I enjoy learning new things in coding.</p>
          </header>
          <section className="projects">
            <h2>Projects</h2>
            <div className="project">
              <h3>Company Inventory Management (CIM) 2022</h3>
              <p><strong>Python</strong></p>
              <p>CIM is developed using Python. It is a program for managing the cost, materials, profit, and loss of various businesses. The program performs calculations to simplify management.</p>
            </div>
            <div className="project">
              <h3>Bu Wallet and Wiriya House 2023</h3>
              <p><strong>Java OOP</strong></p>
              <p>Bu Wallet is a Java program that simulates an online wallet for Bangkok University students.</p>
              <p><strong>Python</strong></p>
              <p>Wiriya House assists in managing tenants of Wiriya's dormitory, simplifying management tasks.</p>
            </div>
            <div className="project">
              <h3>CheckList APP 2024</h3>
              <p><strong>.NET MAUI</strong></p>
              <p>CheckList APP is a program that helps users plan their daily activities, ensuring they don't forget anything.</p>
            </div>
          </section>
          <section className="skills">
            <div className="skills-column">
              <h2>Skill and Tool</h2>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>ทดสอบภาษาอังกฤษได้ ระดับ B1 SALLC-EPT</li>
              </ul>
            </div>
            <div className="skills-column">
              <h2>Soft Skill</h2>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere Pro</li>
                <li>FL Studio</li>
                <li>Canva</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
