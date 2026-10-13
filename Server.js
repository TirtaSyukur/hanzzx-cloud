
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    app: "HanzzX Cloud",
    status: "online",
    androidVirtualization: "not_configured",
    remotePhone: "not_configured",
    playStore: "not_configured",
    timestamp: new Date().toISOString()
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: "HanzzX Cloud API",
    version: "1.0.0",
    endpoints: ["/api/health"]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`HanzzX Cloud berjalan di port ${PORT}`);
});
  
