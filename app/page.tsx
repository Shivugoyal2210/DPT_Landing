import Image from "next/image";

export default function Home() {
  return (
    <div className="site-wrapper">
      <main className="site-main">
        {/* Logo row */}
        <div className="logo-row">
          <div className="logo-dpt">
            <Image
              src="/DPT_logo.png"
              alt="DPT"
              width={150}
              height={150}
              priority
            />
          </div>
          {/*<div className="logo-divider" />*/}
          <span className="logo-times" aria-hidden="true">
            ×
          </span>
          <div className="logo-gw">
            <Image
              src="/gw_logo.png"
              alt="G&W Electric"
              width={270}
              height={70}
              priority
            />
          </div>
        </div>

        {/* Headline + subtitle */}
        <div className="headline-block">
          <h1 className="headline">SITE UNDER CONSTRUCTION.</h1>
          <p className="subtitle">
            A partnership in grid infrastructure. Launching soon.
          </p>
        </div>
      </main>

      <footer className="site-footer">
        <div className="electric-rule" aria-hidden="true">
          <span className="electric-spark" />
        </div>
        <p className="footer-copy">
          © 2026 DPT × G&amp;W Electric. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
