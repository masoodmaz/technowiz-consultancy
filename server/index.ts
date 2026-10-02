import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail, validateContactPayload } from "./contactEmail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "100kb" }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.post("/api/contact", async (req, res) => {
    const validation = validateContactPayload(req.body);
    if (!validation.ok) {
      res.status(400).json({ success: false, error: validation.error });
      return;
    }

    try {
      await sendContactEmail(validation.data);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to send contact email:", error);
      res.status(500).json({
        success: false,
        error: "Email service is not configured correctly. Please try again later.",
      });
    }
  });

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
