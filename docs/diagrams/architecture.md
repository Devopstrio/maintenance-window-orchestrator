# Architecture & Orchestration Diagrams

## 11. End-to-End Orchestration Topology (Detailed)
*How the platform orchestrates maintenance across multi-cloud clusters.*

```mermaid
graph TD
    subgraph "Control Plane (Orchestrator)"
        Portal[Execution Hub]
        Orch[Orchestration Engine]
        DB[Change Metastore]
    end
    subgraph "Execution Tier (Workers)"
        W1[K8s Worker: us-east]
        W2[DB Worker: us-west]
        W3[Legacy Worker: On-Prem]
    end
    subgraph "Target Systems"
        K8s[EKS / GKE Cluster]
        RDS[AWS RDS / Azure SQL]
        App[Legacy ERP]
    end

    Portal --> Orch
    Orch --> W1
    Orch --> W2
    Orch --> W3
    W1 --> K8s
    W2 --> RDS
    W3 --> App
    DB --> Orch
```

## 13. "Conflict Detection" Logic
```mermaid
graph LR
    WindowA[Window A: DB Upgrade] --> Resource[Resource: core-vpc]
    WindowB[Window B: App Patching] --> Resource
    Resource --> Conflict[Conflict: Shared Network Path]
    Conflict --> Alert[Block Scheduling]
```

## 20. Automated Rollback Pipeline
```mermaid
stateDiagram-v2
    Execution --> Post_Check: Step Completed
    Post_Check --> Success: Health Verified
    Post_Check --> Rollback: Health Failed
    Rollback --> State_Reversion: Execute Revert Script
    State_Reversion --> Success_Rollback: System Restored
    Success_Rollback --> Investigation: Incident Created
```
