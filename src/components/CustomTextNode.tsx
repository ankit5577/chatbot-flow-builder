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
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 ${
        !selected
          ? "border-stone-400"
          : "border-teal-400 shadow-md shadow-slate-600"
      }`}
    >
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
};

export default memo(CustomNode);
