import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Counter } from "./Counter";
import "./style.css";

export default function Page() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("second");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <h1>Vike + Tauri + React + TS</h1>

      <div className="logo-div">
        <a href="http://vitejs.dev" target="_blank">
          <img className="logo vite" src="/vite.svg" alt="vite logo" />
        </a>
        <a href="http://tauri.app" target="_blank">
          <img className="logo tauri" src="/tauri.svg" alt="tauri logo" />
        </a>
        <a href="http://react.dev" target="_blank">
          <img className="logo react" src="/react.svg" alt="react logo" />
        </a>
      </div>

      <p>This page is:</p>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive.
          <ul>
            <li>
              <Counter />
            </li>
          </ul>
        </li>
        <li>
          Connected to a Rust backend via Tauri.
          <ul>
            <li>
              <form
                className="row"
                onSubmit={(e) => {
                  e.preventDefault();
                  greet();
                }}
              >
                <input
                  id="greet-input"
                  onChange={(e) => setName(e.currentTarget.value)}
                  placeholder="Enter a name..."
                />
                <button type="submit">Greet</button>
              </form>
              <p>{greetMsg}</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
