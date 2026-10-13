const express = require("express");
const path = require("path");

const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.json({
    app: "HanzzX Cloud",
    status: "online",
    androidVirtualization: "not_configured",
    remotePhone: "not_configured",
    playStore: "not_configured"
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: "HanzzX Cloud API",
    version: "1.0.0"
  });
});

app.use(express.static(path.join(process.cwd(), "public")));

module.exports = app;
