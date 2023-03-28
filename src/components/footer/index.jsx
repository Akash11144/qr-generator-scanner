import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-dark text-capitalize position-fixed bottom-0 w-100"
    >
      <p className="p-2">
        <span className="text-white">@</span>
        <span className="text-success">Tanya jain</span>
      </p>
    </div>
  );
}
