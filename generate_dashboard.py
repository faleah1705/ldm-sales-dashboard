python
import os
import requests
import json

# 1. Fetch data from GitHub API
repo = os.environ.get("GITHUB_REPOSITORY") # Automatically provided by GitHub Actions
token = os.environ.get("GITHUB_TOKEN")
headers = {"Authorization": f"token {token}"} if token else {}

# Fetch recent issue data as an example metric
url = f"https://github.com{repo}/issues?state=all&per_page=100"
response = requests.get(url, headers=headers)
issues = response.json()

# 2. Count states (Open vs Closed)
open_count = sum(1 for i in issues if i.get('state') == 'open' and 'pull_request' not in i)
closed_count = sum(1 for i in issues if i.get('state') == 'closed' and 'pull_request' not in i)

# 3. Generate a beautiful Static HTML Page with Chart.js
html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repository Dashboard</title>
    <script src="https://jsdelivr.net"></script>
    <style>
        body {{ font-family: Arial, sans-serif; background: #f4f6f9; padding: 40px; text-align: center; }}
        .card {{ background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); max-width: 500px; margin: 0 auto; }}
        h1 {{ color: #24292e; }}
    </style>
</head>
<body>
    <div class="card">
        <h1>{repo.split('/')[-1]} Analytics</h1>
        <p>Automated Repository Insights</p>
        <canvas id="dashboardChart"></canvas>
    </div>

    <script>
        const ctx = document.getElementById('dashboardChart').getContext('2d');
        new Chart(ctx, {{
            type: 'pie',
            data: {{
                labels: ['Open Issues', 'Closed Issues'],
                datasets: [{{
                    data: [{open_count}, {closed_count}],
                    backgroundColor: ['#2ea44f', '#cf222e']
                }}]
            }},
            options: {{ responsive: true }}
        }});
    </script>
</body>
</html>
"""

# 4. Save the output
with open("index.html", "w") as f:
    f.write(html_content)

print("Dashboard successfully generated as index.html!")
