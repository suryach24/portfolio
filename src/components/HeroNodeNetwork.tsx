import React from 'react';
import '../styles/HeroNodeNetwork.css';

const NODES = [
  { cx: '8%',  cy: '20%' }, { cx: '22%', cy: '12%' }, { cx: '38%', cy: '28%' },
  { cx: '55%', cy: '10%' }, { cx: '70%', cy: '22%' }, { cx: '85%', cy: '15%' },
  { cx: '92%', cy: '38%' }, { cx: '78%', cy: '55%' }, { cx: '62%', cy: '70%' },
  { cx: '45%', cy: '65%' }, { cx: '28%', cy: '72%' }, { cx: '12%', cy: '58%' },
  { cx: '5%',  cy: '42%' }, { cx: '32%', cy: '45%' }, { cx: '50%', cy: '42%' },
  { cx: '68%', cy: '48%' }, { cx: '18%', cy: '32%' }, { cx: '82%', cy: '75%' },
];

const EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
  [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],
  [1,16],[2,14],[4,15],[7,15],[9,13],[10,13],
];

const HeroNodeNetwork: React.FC = () => (
  <svg
    className="node-network"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {EDGES.map(([a, b], i) => (
      <line
        key={`e${i}`}
        x1={NODES[a].cx} y1={NODES[a].cy}
        x2={NODES[b].cx} y2={NODES[b].cy}
        stroke="#a78bfa"
        strokeWidth="0.8"
      />
    ))}
    {NODES.map((node, i) => (
      <circle
        key={`n${i}`}
        cx={node.cx}
        cy={node.cy}
        r="2.5"
        fill="#a78bfa"
      />
    ))}
  </svg>
);

export default HeroNodeNetwork;
