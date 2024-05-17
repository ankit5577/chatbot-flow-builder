import React, { ChangeEvent } from "react";
import { Node } from "react-flow-renderer";

interface SettingsPanelProps {
  selectedNode: Node;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  selectedNode,
  onChange,
  onBack,
}) => {
  return (
    <aside className="w-64 p-4 bg-slate-900 border-r border-slate-600">
      <h2 className="text-slate-200 text-2xl font-semibold antialiased">
        🐣 XYZ: Chat-flow
      </h2>
      <br />
      <button
        onClick={onBack}
        className="mb-4 text-slate-100 px-2 py-1 rounded-md bg-slate-700 duration-300 hover:bg-slate-800"
      >
        👈🏼 Back
      </button>
      <div className="p-4 bg-white border rounded">
        <label className="block mb-2">
          Text:
          <input
            type="text"
            value={selectedNode.data.label}
            onChange={onChange}
            className="block w-full p-2 border rounded"
          />
        </label>
      </div>
    </aside>
  );
};

export default SettingsPanel;
