import React, { DragEvent } from "react";

const NodesPanel: React.FC = () => {
  const handleDragStart = (event: DragEvent, nodeType: string) => {
    // ? set data to be transferred
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-64 p-4 bg-slate-900 border-r border-slate-600">
      <h2 className="text-slate-200 text-2xl font-semibold antialiased">
        🐣 XYZ: Chat-flow
      </h2>
      <br />
      <p className="text-slate-400">Available Nodes:</p>
      <div
        onDragStart={(event) => handleDragStart(event, "Message")}
        draggable
        className="mb-4 p-4 shadow-md shadow-gray-900  bg-white border rounded cursor-grab"
      >
        📢 Message
      </div>
    </aside>
  );
};

export default NodesPanel;
