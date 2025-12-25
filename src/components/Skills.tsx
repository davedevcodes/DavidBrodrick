export default function SkillsSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* CLIENT-FOCUSED */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What I Do For Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-white/80">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Modern Website Development
              </h3>
              <p>
                I build fast, responsive websites that look great on all devices
                and clearly represent your brand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Clean & Effective Design
              </h3>
              <p>
                I design user-friendly interfaces with a clean, modern look that
                helps visitors understand your message and take action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Smooth Interactions
              </h3>
              <p>
                I add subtle animations and transitions to make your website feel
                polished and professional.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Websites I Build
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Portfolio Websites</li>
                <li>Business Websites</li>
                <li>E-commerce Websites</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEV-FOCUSED */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-white/80">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Frontend
              </h3>
              <ul className="space-y-1">
                <li>HTML, CSS, JavaScript (ES6+)</li>
                <li>React.js, Next.js</li>
                <li>Responsive & mobile-first</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Styling & UI
              </h3>
              <ul className="space-y-1">
                <li>Tailwind CSS</li>
                <li>CSS animations & transitions</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Tools & Workflow
              </h3>
              <ul className="space-y-1">
                <li>Git & GitHub</li>
                <li>Vercel deployment</li>
                <li>Performance-focused builds</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
