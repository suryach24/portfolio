import React, { useState } from 'react';
import { toolGroups, toolConnections } from '../data/skillsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const ref = useScrollReveal();

  const isHighlighted = (tool: string): boolean => {
    if (!hoveredTool) return false;
    if (tool === hoveredTool) return true;
    return (toolConnections[hoveredTool] ?? []).includes(tool);
  };

  const isDimmed = (tool: string): boolean =>
    hoveredTool !== null && !isHighlighted(tool);

  return (
    <section id="skills" className="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="section-header reveal">
        <p className="section-label">Skills & Expertise</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Hover a tool to see how it connects to the rest of the stack.</p>
      </div>

      <div className="tool-layers reveal">
        {toolGroups.map(group => (
          <div className="tool-layer" key={group.layer}>
            <div className="tool-layer-label">{group.layer}</div>
            <div className="tool-pills">
              {group.tools.map(tool => (
                <span
                  key={tool}
                  className={[
                    'tool-pill',
                    isHighlighted(tool) ? 'active' : '',
                    isDimmed(tool) ? 'dimmed' : '',
                  ].filter(Boolean).join(' ')}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hoveredTool && (
        <div className="tool-tooltip reveal visible">
          <strong>{hoveredTool}</strong> connects with:{' '}
          {(toolConnections[hoveredTool] ?? []).join(' · ')}
        </div>
      )}
    </section>
  );
};

export default Skills;
