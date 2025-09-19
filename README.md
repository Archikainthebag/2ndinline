# 2ndinline

## What Can This Repository Do?

This repository provides an automated GitHub Actions workflow that creates a **fully-featured Windows development environment** accessible via RDP (Remote Desktop Protocol). Here's what it can do:

### 🖥️ Core Capabilities

- **Remote Windows Desktop**: Sets up a Windows Server environment with RDP access
- **Secure VPN Connection**: Integrates Tailscale VPN for secure remote access
- **SOCKS5 Proxy**: Provides a SOCKS5 proxy server on port 1080 for network routing
- **Development Environment**: Pre-installs essential development tools

### 🛠️ Pre-installed Software

- **Visual Studio Code** with Python extension
- **Python** with pip package manager
- **Playwright** for web automation and testing
- **PyQt5** for GUI applications
- **Chocolatey** package manager

### 🔧 Development Setup

The workflow automatically creates a project folder (`~/Downloads/saranggggg`) with starter files:
- `humanex.py` - Python script file
- `user_agent.txt` - User agent configuration
- `proxy.txt` - Proxy settings
- `insuranceRPA.json` - RPA configuration file

### 🚀 How to Use

1. **Trigger the Workflow**:
   - Go to the "Actions" tab in this repository
   - Select the "RDP" workflow
   - Click "Run workflow"

2. **Connect to Your Environment**:
   - The workflow will output a Tailscale IP address
   - Use any RDP client to connect with:
     - **IP**: Tailscale IP (shown in workflow logs)
     - **Username**: `RDP`
     - **Password**: `1234`

3. **Session Duration**:
   - The environment stays active for **6 hours** (3600 minutes)
   - Perfect for development sessions and testing

### 🔒 Security Features

- **Tailscale VPN**: Secure, encrypted connection to your remote environment
- **Firewall Configuration**: Properly configured Windows firewall rules
- **Session Management**: Prevents disconnections and screen locks
- **Admin Access**: Full administrative privileges for development needs

### 📋 Prerequisites

- **Tailscale Auth Key**: You need to set `TAILSCALE_AUTH_KEY` as a repository secret
- **GitHub Actions**: Must be enabled on the repository

### ⚠️ Important Notes

- This creates a **temporary** Windows environment (destroyed after 6 hours)
- Designed for development, testing, and automation tasks
- Includes proxy capabilities for network routing scenarios
- All data is ephemeral - save important work externally

### 🎯 Use Cases

- Remote Windows development
- Web scraping and automation testing
- RPA (Robotic Process Automation) development
- Cross-platform testing
- Secure proxy server setup
- Python GUI application development

---

*This repository transforms GitHub Actions into a powerful remote Windows development platform with just one click!*