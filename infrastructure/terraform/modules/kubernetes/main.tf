resource "aws_eks_cluster" "network_cost_cluster" {
  name     = "network-cost-optimization-cluster-${var.environment}"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }

  tags = {
    Name        = "network-cost-optimization-cluster-${var.environment}"
    Environment = var.environment
    Platform    = "FinOps"
  }
}

resource "aws_eks_node_group" "processing_nodes" {
  cluster_name    = aws_eks_cluster.network_cost_cluster.name
  node_group_name = "network-flow-processing-nodes"
  node_role_arn   = aws_iam_role.eks_node_role.arn
  subnet_ids      = var.subnet_ids

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 3
  }

  instance_types = ["r6g.2xlarge"] # Memory optimized for Pandas/Flow Log processing

  tags = {
    Name = "network-flow-processing-nodes"
  }
}
