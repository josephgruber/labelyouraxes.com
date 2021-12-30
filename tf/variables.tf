variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS profile"
  type        = string
  default     = "personal"
}

variable "tags" {
  type = map(string)
  default = {
    Project = "labelyouraxes.com"
  }
}

variable "domain" {
  description = "Domain"
  type        = string
  default     = "labelyouraxes.com"
}
