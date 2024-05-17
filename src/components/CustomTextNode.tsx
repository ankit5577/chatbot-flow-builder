import { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

interface CustomNodeProps {
  data: {
    label: string;
    job: string;
    emoji: string;
  };
  selected: boolean;
}

const CustomNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
  return (
    <div
      className={`shadow-md rounded-md bg-slate-200 border-2 ${
        !selected ? "border-stone-400" : "border-teal-400 shadow-slate-600"
      }`}
    >
      <div className="m-0 px-4 font-bold bg-teal-400">💬 Send Message</div>
      <div className="px-4 py-2 text-lg flex gap-2">
        <p>{data.emoji} </p>
        <p>{data.label}</p>
      </div>

      <Handle type="target" position={Position.Left} className="!bg-teal-500" />
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-teal-500"
      />
    </div>
  );
};

export default memo(CustomNode);
