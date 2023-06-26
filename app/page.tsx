"use client";
import { useState, type ReactNode } from "react";
import out, { type Outclass } from "outclass";

// This is the Outclass playground, read more https://github.com/b1n01/outclass.
// This demo is a Next.js app with TypeScript and TailwindCSS.
// Feel free to play around with thw `out` object.

export default function Playground() {
  const [state, setState] = useState(false);

  // Define a "patch" to update the button style
  const patch = out.with({
    add: state && "bg-violet-600 text-neutral-200",
    remove: state && "bg-neutral-200 text-neutral-900",
  });

  return (
    // Pass the "patch" prop to the Button component
    <Button onClick={() => setState(!state)} style={patch}>
      Toggle state
    </Button>
  );
}

function Button({
  style,
  onClick,
  children,
}: {
  style?: Outclass;
  onClick: () => void;
  children: ReactNode;
}) {
  // Define the button style and apply the given patch
  const classes = out.parse({
    set: "rounded bg-neutral-200 text-neutral-900 p-2 px-4 mb-8",
    apply: style,
  });

  return (
    <>
      <button onClick={onClick} className={classes}>
        {children}
      </button>
      <p>Applied classes:</p>
      <code>{classes}</code>
    </>
  );
}
