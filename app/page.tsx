"use client";
import { useState } from "react";
import { s } from "stype";

export default function Playground() {
  const [state, setState] = useState(false);

  const buttonStyle = s.from({
    base: "rounded round-4",
    colors: "bg-neutral-300 text-neutral-900",
    spacing: "p-2 mt-2",
  });

  if (state) {
    buttonStyle
      .remove("bg-neutral-300 text-neutral-900")
      .add("bg-violet-800 text-white");
  }

  const code = (
    <code className={s.parse("bg-neutral-300 p-2 text-neutral-900")}>
      class
    </code>
  );

  return (
    <main className="p-8 bg-neutral-900 h-full text-white">
      <h1 className={s.parse("text-2xl")}>Stype playground</h1>
      <div className={s.parse("mt-2")}>
        Open your browser's dev tool and inspect the {code} atttribute of these
        elements.
      </div>
      <button onClick={() => setState(!state)} className={buttonStyle.parse()}>
        Toggle state
      </button>
    </main>
  );
}
