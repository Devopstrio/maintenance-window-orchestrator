resource "aws_db_instance" "maint_orch_db" {
  identifier        = "maint-orch-db-${var.env}"
  engine            = "postgres"
  engine_version    = "15.3"
  instance_class    = "db.t3.medium"
  allocated_storage = 20
  
  db_name  = "maint_orch"
  username = var.db_user
  password = var.db_password

  vpc_security_group_ids = [var.db_sg_id]
  db_subnet_group_name   = var.db_subnet_group

  skip_final_snapshot = true
}
