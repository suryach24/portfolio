import React from 'react';
import '../styles/SLOPanel.css';

const SLOPanel: React.FC = () => (
  <div className="slo-panel">
    <div className="slo-status">
      <span className="slo-dot" aria-hidden="true" />
      SURYA.DEV — ALL SYSTEMS OPERATIONAL
    </div>
    <div className="slo-pills">
      <span className="slo-pill green">Availability: Open to Opportunities</span>
      <span className="slo-pill purple">Response SLO: &lt;24h</span>
      <span className="slo-pill amber">P0 Incidents: 0</span>
    </div>
  </div>
);

export default SLOPanel;
