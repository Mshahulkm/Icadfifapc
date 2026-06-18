import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICAD FIFA World Cup 2026 Prediction Contest" },
      {
        name: "description",
        content:
          "ICAD FIFA World Cup 2026 Prediction Contest for ICAD & MBL employees. Predict. Compete. Win.",
      },
      { property: "og:title", content: "ICAD FIFA World Cup 2026 Prediction Contest" },
      {
        property: "og:description",
        content: "Predict. Compete. Win. Join the ICAD & MBL FIFA 2026 Prediction Contest.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/icad-assets/index.html"
      title="ICAD FIFA 2026"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        display: "block",
        background: "#05060B",
      }}
    />
  );
}
