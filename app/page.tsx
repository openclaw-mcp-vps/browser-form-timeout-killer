export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Never Lose a Long Form to a{" "}
          <span className="text-[#58a6ff]">Session Timeout</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Form Timeout Killer monitors your browser sessions, detects timeout warnings, and silently refreshes your authentication — all while keeping every field you typed safely stored.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Get Access — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Works on Chrome &amp; Edge.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {[
          { icon: "⏱", title: "Timeout Detection", desc: "Spots session expiry warnings before they kick you out" },
          { icon: "🔄", title: "Silent Refresh", desc: "Re-authenticates in the background without interrupting you" },
          { icon: "💾", title: "Data Preserved", desc: "Every field saved to local storage — nothing is lost" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-16 flex justify-center">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <h2 className="text-white text-2xl font-bold mb-1">Pro</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need, nothing you don't</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited form sessions monitored",
              "Auto session refresh on all sites",
              "Local storage form data backup",
              "Dashboard with session analytics",
              "Chrome &amp; Edge support",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now — $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-white text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which sites does it work on?",
              a: "It works on any website with a standard session cookie or token-based auth — insurance portals, loan applications, government forms, HR systems, and more."
            },
            {
              q: "Is my form data sent to your servers?",
              a: "No. All form data is stored exclusively in your browser's local storage. Nothing is transmitted to our servers."
            },
            {
              q: "What happens if the refresh fails?",
              a: "You'll get an immediate browser notification so you can act before the session fully expires. Your typed data remains saved locally."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Form Timeout Killer. All rights reserved.
      </footer>
    </main>
  );
}
