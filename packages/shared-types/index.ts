export enum MaintenanceStatus {
  SCHEDULED = "SCHEDULED",
  PENDING_APPROVAL = "PENDING_APPROVAL",
  PRE_CHECK = "PRE_CHECK",
  IN_PROGRESS = "IN_PROGRESS",
  POST_CHECK = "POST_CHECK",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  ROLLING_BACK = "ROLLING_BACK",
  ROLLED_BACK = "ROLLED_BACK"
}

export enum MaintenanceSeverity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL"
}

export interface MaintenanceWindow {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: MaintenanceStatus;
  severity: MaintenanceSeverity;
  affectedSystems: string[];
  dependencyIds: string[];
  riskScore: number;
  assignedTeam: string;
}

export interface ExecutionStep {
  id: string;
  order: number;
  title: string;
  action: string;
  status: "PENDING" | "RUNNING" | "SUCCESS" | "FAILURE";
  startTime?: string;
  endTime?: string;
  logs?: string;
}

export interface BlackoutPolicy {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  reason: string;
  affectedRegions: string[];
}
