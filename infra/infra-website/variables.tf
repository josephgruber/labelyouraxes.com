variable "default_tags" {
  default = {
    "ManagedBy" = "Terraform"
    "Project"   = "labelyouraxes.com"
  }
  description = "Key-value map of default tags to add to resources"
  type        = map(string)
}

variable "domain" {
  description = "Apex domain for the website"
  type        = string
  default     = "labelyouraxes.com"
}
