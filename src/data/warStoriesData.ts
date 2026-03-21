export interface WarStory {
  id: string;
  statusLabel: string;
  statusColor: 'amber' | 'purple' | 'green';
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  impact: string;
}

export const warStories: WarStory[] = [
  {
    id: 'coyote-migration',
    statusLabel: 'PROJECT DELIVERED',
    statusColor: 'amber',
    title: 'Coyote Logistics — On-Prem to AWS Migration',
    problem:
      'Legacy on-prem infrastructure blocked scalability for a major supply chain platform handling millions of logistics operations.',
    approach:
      'Designed a phased 3-year migration strategy: assessment → lift-and-shift → re-architecture → optimization. Two-person team, rigorous POC validation before each phase.',
    tools: ['AWS EC2', 'ECS', 'Lambda', 'Redshift', 'Kinesis', 'CodePipeline', 'CloudFormation', 'RDS', 'DynamoDB', 'Route53', 'VPC', 'CloudWatch'],
    outcome:
      'Full cloud migration with auto-scaling, real-time Redshift analytics, and AWS Cost Explorer dashboards. Zero data loss across all database migrations.',
    impact: '3-year timeline · 25+ AWS services · Zero data loss · Auto-scaling achieved',
  },
  {
    id: 'humana-dashboard',
    statusLabel: 'INCIDENT RESOLVED',
    statusColor: 'purple',
    title: 'Humana — Program-wide Scrum Visibility Dashboard',
    problem:
      'No unified view of team velocity, burndown, or test metrics across the program. Decisions were made on instinct, not data.',
    approach:
      'Solely built a POC → production dashboard integrating Azure DevOps + qTest via Selenium/Java + PowerBI. Automated daily data updates via Windows Scheduler.',
    tools: ['PowerBI', 'Azure DevOps', 'qTest', 'Selenium Server', 'Java', 'PowerShell', 'Windows Scheduler'],
    outcome:
      'Program-wide real-time visibility into team velocity, burndown, and test health. Enabled data-driven sprint planning across multiple teams.',
    impact: 'Program-wide adoption · Daily automated data refresh · Eliminated manual reporting',
  },
  {
    id: 'ally-migration',
    statusLabel: 'PROJECT DELIVERED',
    statusColor: 'green',
    title: 'Ally Financial — AAOS Test Suite Migration',
    problem:
      'AAOS automated test suite lived on BitBucket with no modern CI/CD. Migration to GitLab required rebuilding the entire pipeline from scratch.',
    approach:
      'Led migration strategy definition, designed full GitLab CI/CD pipeline (build → test → scan → report → notify), integrated Docker for consistency across environments.',
    tools: ['GitLab CI/CD', 'Docker', 'Python', 'TestNG', 'XML/HTML Reports', 'Splunk', 'DynaTrace', 'BrowserStack'],
    outcome:
      'Seamless migration with improved test execution efficiency, automated HTML reporting, and stakeholder email notifications. Cross-team adoption streamlined.',
    impact: 'Zero test regression · Automated reporting · 5-stage CI/CD pipeline',
  },
];
