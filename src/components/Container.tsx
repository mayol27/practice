import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="py-8 lg:w-4/5 w-11/12 m-auto">{children}</div>;
}
