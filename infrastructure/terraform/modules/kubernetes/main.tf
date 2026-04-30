resource "aws_eks_cluster" "maint_orch_cluster" {
  name     = "maint-orch-cluster-${var.env}"
  role_arn = var.eks_role_arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}

resource "aws_eks_node_group" "maint_orch_nodes" {
  cluster_name    = aws_eks_cluster.maint_orch_cluster.name
  node_group_name = "maint-orch-workers"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.subnet_ids

  scaling_config {
    desired_size = 2
    max_size     = 5
    min_size     = 2
  }

  instance_types = ["t3.large"]
}
