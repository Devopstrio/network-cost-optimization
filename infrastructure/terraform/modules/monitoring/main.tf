resource "helm_release" "prometheus" {
  name       = "prometheus"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "prometheus"
  namespace  = "monitoring"
  create_namespace = true

  set {
    name  = "server.retention"
    value = "30d"
  }

  set {
    name  = "server.persistentVolume.size"
    value = "250Gi" # Large volume for storing high-cardinality flow metrics
  }
}

resource "helm_release" "grafana" {
  name       = "grafana"
  repository = "https://grafana.github.io/helm-charts"
  chart      = "grafana"
  namespace  = "monitoring"

  set {
    name  = "adminPassword"
    value = var.grafana_admin_password
  }

  set {
    name  = "dashboards.default.network-cost.file"
    value = "dashboards/network-cost.json"
  }
}
