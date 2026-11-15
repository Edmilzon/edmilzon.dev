import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Portafolio de Ariel Edmilzon Luna Tudela";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "74px 78px",
          background: "#0b0e14",
          color: "#f1f3f8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            borderLeft: "8px solid #91aaff",
            paddingLeft: "48px",
          }}
        >
          <div style={{ display: "flex", color: "#a6adba", fontSize: 25 }}>
            PORTAFOLIO · COCHABAMBA, BOLIVIA
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                maxWidth: 920,
                fontSize: 76,
                fontWeight: 600,
                letterSpacing: "-4px",
                lineHeight: 1.02,
              }}
            >
              Ariel Edmilzon Luna Tudela
            </div>
            <div style={{ display: "flex", color: "#a6adba", fontSize: 29 }}>
              Desarrollador de software · Web y móvil
            </div>
          </div>
          <div style={{ display: "flex", color: "#91aaff", fontSize: 22 }}>
            edmilzon-dev.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
