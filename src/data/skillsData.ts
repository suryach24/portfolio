export interface ToolGroup {
  layer: string;
  tools: string[];
}

export interface ToolConnection {
  [tool: string]: string[];
}

export const toolGroups: ToolGroup[] = [
  { layer: 'Cloud', tools: ['AWS', 'Azure'] },
  { layer: 'Orchestration', tools: ['Kubernetes', 'ECS', 'Docker'] },
  { layer: 'Infrastructure as Code', tools: ['Terraform', 'CloudFormation', 'Ansible'] },
  { layer: 'CI/CD', tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CodePipeline'] },
  { layer: 'Security', tools: ['IAM', 'SonarQube', 'DAST ZAP', 'BlackDuck'] },
  { layer: 'Observability', tools: ['CloudWatch', 'Splunk', 'Grafana', 'Kibana'] },
  { layer: 'Data & Storage', tools: ['Redshift', 'Kinesis', 'DynamoDB', 'RDS', 'S3'] },
  { layer: 'Scripting', tools: ['Python', 'Bash', 'PowerShell'] },
];

export const toolConnections: ToolConnection = {
  AWS: ['Terraform', 'CloudFormation', 'Kubernetes', 'ECS', 'Docker', 'CloudWatch', 'Kinesis', 'Redshift', 'S3', 'DynamoDB', 'RDS', 'CodePipeline', 'IAM'],
  Azure: ['Terraform', 'Ansible', 'GitLab CI', 'GitHub Actions'],
  Terraform: ['AWS', 'Azure', 'Ansible', 'CloudFormation'],
  CloudFormation: ['AWS', 'Terraform', 'CodePipeline'],
  Ansible: ['Terraform', 'AWS', 'Azure', 'Jenkins'],
  Kubernetes: ['Docker', 'AWS', 'ECS'],
  ECS: ['Docker', 'AWS', 'CodePipeline'],
  Docker: ['Kubernetes', 'ECS', 'Jenkins', 'GitLab CI', 'GitHub Actions'],
  Jenkins: ['Docker', 'Ansible', 'SonarQube', 'Python', 'Bash'],
  'GitLab CI': ['Docker', 'SonarQube', 'Python', 'Bash', 'AWS', 'Azure'],
  'GitHub Actions': ['Docker', 'AWS', 'Azure', 'Python'],
  CodePipeline: ['AWS', 'CloudFormation', 'ECS'],
  IAM: ['AWS', 'SonarQube', 'DAST ZAP'],
  SonarQube: ['Jenkins', 'GitLab CI', 'IAM', 'BlackDuck'],
  'DAST ZAP': ['IAM', 'Jenkins', 'GitLab CI'],
  BlackDuck: ['SonarQube', 'Jenkins'],
  CloudWatch: ['AWS', 'Kinesis'],
  Splunk: ['AWS', 'Kubernetes'],
  Grafana: ['CloudWatch', 'Kubernetes', 'AWS'],
  Kibana: ['AWS'],
  Redshift: ['AWS', 'Kinesis'],
  Kinesis: ['AWS', 'Redshift', 'CloudWatch'],
  DynamoDB: ['AWS'],
  RDS: ['AWS'],
  S3: ['AWS'],
  Python: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Bash'],
  Bash: ['Python', 'Jenkins', 'GitLab CI', 'Ansible'],
  PowerShell: ['Azure'],
};
