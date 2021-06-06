import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type from "./utils/type";

import './App.css';

function App() {

  const timing = 4500;

  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("")

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    try {
      setSetup("")
      setPunchline("");

      const joke = await axios.get("https://official-joke-api.appspot.com/jokes/general/random");
      const { setup, punchline } = joke.data[0];

      type(setup, setSetup);
      setTimeout(() => type(punchline, setPunchline), timing);

    } catch (error) {
      console.error(error);
      setSetup("something went wrong :(")
    }
  }

  return (
    <div>
    
      <header>
        <h1>Joke Machine</h1>
      </header>

      <main>
        <div id="joke">
          <p className="setup">{setup}</p>
          <p className="punchline">{punchline}</p>
        </div>
        <div className="actions">
          <button onClick={getJoke}>tell me another</button>
        </div>
      </main>

      <footer>
        <p>The joke machine was made by <a href="https://jamiedrew.github.io">Jamie Drew</a> using the <a href="https://github.com/15Dkatz/official_joke_api">Official Joke API  by David Katz</a>.</p>
        
        <p>Jamie takes no responsibility for the jokes you see here. Do not ask him about them.</p>
      </footer>

    </div>
  );
}

export default App;
