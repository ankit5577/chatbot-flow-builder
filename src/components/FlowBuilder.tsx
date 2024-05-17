import React, { ChangeEvent, DragEvent, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import CustomTextNode from "./CustomTextNode";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const nodeTypes = {
  customText: CustomTextNode,
} as const;

const FlowBuilder: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = (params: Edge | Connection) =>
    setEdges((eds) => addEdge(params, eds));

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    // ? get bounds of reactFlow
    const reactFlowBounds = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");

    // ? get position of the node
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };
    const newNode: Node = {
      id: `${new Date().getTime()}`,
      type: type === "Message" ? "customText" : "default",
      position,
      data: { label: `${type} node` },
    };

    setNodes((_node) => _node.concat(newNode));
  };

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (selectedNode) {
      const newText = event.target.value;
      // ? update nodes
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id
            ? { ...node, data: { ...node.data, label: newText } }
            : node
        )
      );
      // ? update selected node
      setSelectedNode((prevNode) =>
        prevNode
          ? { ...prevNode, data: { ...prevNode.data, label: newText } }
          : null
      );
    }
  };

  const onSave = () => {
    if (nodes.length > 1) {
      // ? check if more than one node has empty target handles
      const nodesWithEmptyTargets = nodes.filter(
        (node) =>
          !edges.some((edge) => edge.source === node.id) &&
          !edges.some((edge) => edge.target === node.id)
      );
      if (nodesWithEmptyTargets.length > 1) {
        alert("Cannot save flow: More than one node has empty target handles");
        return;
      }
    }

    // ? check if any node has empty label
    const hasErrors = nodes.some((node) => !node.data.label);
    if (hasErrors) {
      alert("Cannot save flow: some nodes have empty labels");
    } else {
      alert("Flow saved successfully");
    }
  };

  // ? reset selected node to show nodePanel
  const onBackHandler = () => {
    setSelectedNode(() => null);
  };

  return (
    <div className="flex h-screen">
      {/* // ? if selected node? then show performable actions else nodePanel */}
      {selectedNode ? (
        <SettingsPanel
          selectedNode={selectedNode}
          onChange={onTextChange}
          onBack={onBackHandler}
        />
      ) : (
        <NodesPanel />
      )}

      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => onNodeClick(_, node)}
          className="flex-1 bg-slate-800"
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>

      {/* // * save changes CTA */}
      <button
        onClick={onSave}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-[999]"
      >
        Save Changes
      </button>
    </div>
  );
};

export default FlowBuilder;