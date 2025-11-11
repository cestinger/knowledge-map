import "../app.global.css"

export default function Page() {
  return (
    <>
      <style>{`
        html, body {
          background-color: #0b0d15;
          overflow: hidden !important;
          height: 100vh !important;
          width: 100vw !important;
          position: fixed !important;
          overscroll-behavior: none !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
        }
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
      <main className="fixed inset-0 overflow-hidden bg-gradient-to-b from-[#080a0f] to-[#0b0d15] scrollbar-hide flex">
        <div>editor</div>
      </main>
    </>
  )
}
