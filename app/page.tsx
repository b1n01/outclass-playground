"use client";
import { useState } from "react";
import { s } from "stype";

// This is the Stype demo, read more https://github.com/b1n01/stype.
// This demo is a Next.js app with TypeScript and TailwindCSS, edit "buttonStyle"
// to update the applied classes.

export default function Playground() {
  const [state, setState] = useState(false);

  const buttonStyle = s.from({
    default: "rounded",
    colors: "bg-neutral-200 text-neutral-900",
    spacing: "p-2 px-4 mb-8",
  });

  if (state) {
    buttonStyle
      .remove("bg-neutral-200 text-neutral-900")
      .add("bg-violet-600 text-neutral-200");
  }

  const classes = buttonStyle.parse();

  return (
    <main>
      <button onClick={() => setState(!state)} className={classes}>
        Toggle state
      </button>
      <div>
        <p>Applied classes:</p>
        <code>{classes}</code>
      </div>
    </main>
  );
}
