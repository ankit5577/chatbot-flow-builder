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
      <button
        onClick={onBack}
        className="mb-4 bg-gray-300 text-black px-4 py-2 rounded"
      >
        Back
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
