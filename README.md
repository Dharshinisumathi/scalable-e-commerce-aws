# 🛒 Scalable E-Commerce Deployment on AWS

### 🎯 Objective
To deploy a highly available, fault-tolerant e-commerce application that automatically scales based on traffic.

### 🏗️ Architecture
User -> Route 53 -> ALB (Load Balancer) -> Auto Scaling Group (2-5 EC2) -> RDS MySQL

### ☁️ AWS Services Used
- EC2, AMI, Launch Template
- Auto Scaling Group, Application Load Balancer (ALB)
- RDS MySQL, CloudWatch, VPC

### 📋 Implementation Steps
1. Created RDS MySQL database - ecommerce_db
2. Deployed Node.js app on EC2 (t2.micro)
3. Created AMI - ecommerce-ami
4. Launch Template with User Data
5. Auto Scaling Group: Min 2, Desired 2, Max 5 (Multi-AZ)
6. ALB with Target Group
7. CloudWatch Alarm for CPU > 70% scale out

### ✅ Features
- High Availability (Multi-AZ)
- Auto Scaling & Load Balancing
- Fault Tolerant

**Developed by: NANTHINI V**
