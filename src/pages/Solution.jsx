import React, { useState } from "react";
import wf6 from "../assets/img/wf6.png";
import wf4 from "../assets/img/wf4.png";
import wf5 from "../assets/img/wf5.png";

const Solution = () => {
  const [solutions] = useState([
    {
      title: "Solution 1",
      shortDesc: "Short description for solution 1",
      detailDesc: "Detailed description for solution 1 along with some images, text, etc.",
      img: wf6,
    },
    {
      title: "Solution 2",
      shortDesc: "Short description for solution 2",
      detailDesc: "Detailed description for solution 2 with more details.",
      img: wf4,
    },
    // ... you can add more solutions here.
  ]);

  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  return (
    
    <section id="resume" className="solution">
      <div className="section-title">
            <h2>Our Solution</h2>
      </div>
    <div className="container" data-aos="fade-up" style={{ display: "flex", justifyContent: "space-between" }}>

      {/* Left div for solution list */}
      <div className="left-container" style={{ flex: 1, borderRight: "1px solid black", padding: "20px" }}>
        {solutions.map((solution, index) => (
          <div key={index} onClick={() => setSelectedSolution(solution)}>
            <h3>{solution.title}</h3>
            <p>{solution.shortDesc}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* Right div for solution details */}
      <div className="right-container" style={{ flex: 2, padding: "20px" }}>
        <h2>{selectedSolution.title}</h2>
        <p>{selectedSolution.detailDesc}</p>
        <img src={selectedSolution.img} alt={selectedSolution.title} style={{ width: '100%', objectFit: 'contain' }} />
      </div>
    </div>
    </section>
  );
}

export default Solution;
