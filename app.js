:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #eef4ff;
  --sidebar: #0f172a;
  --sidebar-soft: #1e293b;
  --border: #e2e8f0;
  --text: #172033;
  --muted: #64748b;
  --primary: #2563eb;
  --primary-soft: rgba(37, 99, 235, 0.12);
  --success: #16a34a;
  --warning: #f59e0b;
  --danger: #ef4444;
  --purple: #7c3aed;
  --cyan: #06b6d4;
  --shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0b1220 0%, #111827 100%);
  color: #f8fafc;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #60a5fa, #2563eb);
  font-weight: 800;
  color: white;
}

.brand h1 {
  margin: 0;
  font-size: 1.1rem;
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
  color: var(--muted);
  font-weight: 700;
}

.sidebar .eyebrow {
  color: rgba(255, 255, 255, 0.7);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  color: #dfe8f9;
  padding: 12px 14px;
  text-align: left;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(96, 165, 250, 0.15);
  border-color: rgba(96, 165, 250, 0.4);
}

.sidebar-card {
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 18px;
  margin-top: auto;
}

.sidebar-card h3 {
  margin: 0 0 18px;
  font-size: 1.1rem;
}

.mini-metric {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  margin-top: 10px;
  font-size: 0.8rem;
}

.mini-metric span {
  color: rgba(255, 255, 255, 0.7);
}

.content {
  padding: 32px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.topbar h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2vw, 2.3rem);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 14px;
  min-width: 280px;
  box-shadow: var(--shadow);
}

.search-box input {
  border: 0;
  background: transparent;
  color: var(--text);
  width: 100%;
  outline: none;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.summary-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.summary-card .label {
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.metric-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 1rem;
}

.summary-card h3 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.1rem);
  line-height: 1.2;
}

.summary-card small {
  display: inline-block;
  margin-top: 10px;
  color: var(--muted);
}

.card-positive small {
  color: var(--success);
}

.card-warning small {
  color: var(--warning);
}

.panel-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.panel-grid-2 {
  grid-template-columns: 1.5fr 0.9fr;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 18px 18px 16px;
}

.large-panel {
  min-height: 300px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.15rem;
}

.chart-wrap {
  width: 100%;
  height: 220px;
}

#revenue-chart {
  width: 100%;
  height: 220px;
  display: block;
}

.breakdown-list, .bar-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.breakdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
}

.breakdown-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.breakdown-meta strong {
  font-size: 0.92rem;
}

.breakdown-value {
  text-align: right;
  font-weight: 700;
  color: var(--text);
}

.progress-track {
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 8px;
  border-radius: 999px;
  background: #eef2f7;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
}

.bar-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bar-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--muted);
}

.bar-track {
  width: 100%;
  height: 10px;
  background: #edf2f7;
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: inherit;
}

.table-wrap {
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  text-align: left;
  color: var(--muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
}

tbody td {
  padding: 14px 10px;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.95rem;
  vertical-align: middle;
}

tbody tr:hover {
  background: #f8fbff;
}

.empty-state {
  text-align: center;
  padding: 24px 10px;
  color: var(--muted);
}

@media (max-width: 1100px) {
  .summary-grid {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }

  .panel-grid-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 840px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 18px;
  }

  .content {
    padding: 20px 16px 32px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-box {
    width: 100%;
    min-width: 0;
  }
}
