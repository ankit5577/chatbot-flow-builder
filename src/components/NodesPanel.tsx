import React, { DragEvent } from "react";

const NodesPanel: React.FC = () => {
  const handleDragStart = (event: DragEvent, nodeType: string) => {
    // ? set data to be transferred
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-64 p-4 bg-slate-900 border-r border-slate-600">
      <div
        onDragStart={(event) => handleDragStart(event, "Message")}
        draggable
        className="mb-4 p-4 bg-white border rounded cursor-grab"
      >
        Message
      </div>
    </aside>
  );
};

export default NodesPanel;
