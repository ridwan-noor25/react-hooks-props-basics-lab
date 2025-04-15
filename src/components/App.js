import React from "react";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    color: "firebrick",
    bio: "Web developer", 
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/"
    }
  };

  return (
    <div>
      <nav>Navigation</nav>
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default App;
