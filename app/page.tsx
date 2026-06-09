export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Discord Bot{" "}
          <span className="text-[#58a6ff]">Performance</span>{" "}
          &amp; Monetization
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Analytics dashboard for Discord bot developers. Monitor usage metrics, benchmark against competitors, and unlock revenue insights — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { stat: "10k+", label: "Bots Tracked" },
            { stat: "$2M+", label: "Revenue Analyzed" },
            { stat: "500+", label: "Bot Developers" }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff]">{item.stat}</div>
              <div className="text-[#8b949e] mt-1 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Pro Plan
          </div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bot tracking",
              "Real-time usage analytics",
              "Marketplace competitive analysis",
              "Revenue & monetization insights",
              "Lemon Squeezy billing integration",
              "Email alerts & weekly reports"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bot tracking work?",
              a: "Connect your Discord bot via OAuth2. We pull usage stats, server counts, and command metrics directly from Discord's API and display them in your dashboard."
            },
            {
              q: "What marketplace data do you analyze?",
              a: "We scrape top.gg, Discord Bot List, and other public marketplaces to benchmark your bot's ratings, reviews, and growth against competitors in your niche."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Subscriptions are managed through Lemon Squeezy. You can cancel from your billing portal at any time with no cancellation fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Bot Marketplace Scanner. All rights reserved.
      </footer>
    </main>
  );
}
