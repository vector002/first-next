"use client"
export default function CreativeGreeting() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at center, #1a1a1a, #000000)",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          fontWeight: "bold",
          background: "linear-gradient(-45deg, #FF6B6B, #4ECDC4, #45B7D1, #96E6A1)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: "gradient 15s ease infinite",
          padding: "2rem",
        }}
      >
        Nurmuhammad
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </h1>
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/74O0cE-GxPs?si=-D8vul3p8cC3WrXb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
    </main>
  )
}

