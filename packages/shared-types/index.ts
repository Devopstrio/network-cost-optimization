export enum TrafficType {
  EGRESS = "EGRESS",
  INGRESS = "INGRESS",
  INTER_ZONE = "INTER_ZONE",
  INTER_REGION = "INTER_REGION",
  INTRA_VPC = "INTRA_VPC"
}

export enum NetworkService {
  NAT_GATEWAY = "NAT_GATEWAY",
  LOAD_BALANCER = "LOAD_BALANCER",
  CDN = "CDN",
  PRIVATE_LINK = "PRIVATE_LINK",
  DIRECT_CONNECT = "DIRECT_CONNECT",
  PEERING = "PEERING"
}

export interface NetworkCostEntry {
  id: string;
  provider: "AWS" | "AZURE" | "GCP";
  service: NetworkService;
  type: TrafficType;
  sourceRegion: string;
  targetRegion?: string;
  dataTransferredGB: number;
  cost: number;
  currency: string;
  tags: Record<string, string>;
  date: string;
}

export interface NetworkOptimization {
  id: string;
  title: string;
  description: string;
  service: NetworkService;
  potentialSavings: number;
  confidence: number;
  effort: "LOW" | "MEDIUM" | "HIGH";
  status: "PENDING" | "APPLIED" | "IGNORED";
}

export interface NetworkKPIs {
  totalMonthlyNetworkSpend: number;
  egressRatio: number; // Egress vs Total
  natGatewayEfficiency: number;
  cdnCacheHitRatio: number;
  unitCostPerGB: number;
}
