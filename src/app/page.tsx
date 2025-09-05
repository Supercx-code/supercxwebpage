import Card from "./components/Card";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative z-10 min-h-screen flex flex-col items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing-bg-1.png')",
        }}
      >
        {/* NAVBAR */}
        <header className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-6">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

          {/* Nav Links */}
          <nav
            className="flex items-center gap-10 px-8 py-3
            rounded-full
            bg-gradient-to-r from-black/80 via-purple-800/40 to-black/80
            backdrop-blur-xl
            border border-white/10
            shadow-[inset_1px_1px_2px_rgba(255,255,255,0.08),0_4px_25px_rgba(0,0,0,0.6)]"
          >
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">Home</a>
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">Products</a>
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">Services</a>
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">About Us</a>
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">Blog</a>
            <a href="#" className="text-sm text-white/90 hover:text-pink-400 transition">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-transparent">
            <button
              className="px-6 py-2.5 rounded-full
              bg-gradient-to-r from-black/90 via-purple-900/40 to-black/90
              backdrop-blur-lg
              text-sm font-medium text-white/90
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.6)]
              hover:bg-white/10 transition"
            >
              Get in Touch →
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mt-20 px-4">
          {/* Heading */}
          <h1
            className="text-[48px] md:text-[64px] font-bold leading-[1.2] text-center"
            style={{
              background:
                "radial-gradient(circle, rgba(230,230,230,1) 70%, rgba(150,150,150,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Revolutionize Customer Experience <br />
            with AI-Powered Solutions
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base md:text-lg font-normal text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From intelligent chatbots to CRM and marketing automation, SuperCX helps businesses
            scale smarter, faster, and more efficiently.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <button className="text-white font-medium hover:underline transition">
              Book a Free Consultation
            </button>
            <div className="inline-block rounded-full p-[0.5px] bg-gradient-to-br from-white/25 via-white/10 to-transparent">
              <button
                className="px-8 py-3 rounded-full
                bg-gradient-to-r from-black/40 via-purple-900/20 to-black/40
                backdrop-blur-xl
                text-white font-normal flex items-center gap-2
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.4)]
                hover:bg-white/5 transition"
              >
                Explore Our Products <span>💎</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3
            className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-center mb-6"
            style={{
              fontFamily: "Marope, sans-serif",
              background:
                "radial-gradient(circle, rgba(230,230,230,1) 70%, rgba(150,150,150,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted By
          </h3>

          <div className="flex justify-center">
            <img
              src="/trustedcompanies.png"
              alt="Trusted By Companies"
              className="w-full max-w-5xl rounded-2xl shadow-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
         {/* SERVICES SECTION */}
        <section
          className="relative z-10 py-20 px-6 bg-cover bg-top "
          style={{
            backgroundImage: "url('/landingbg-4.png')",
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="text-gray-300">Our </span>
              <span className="text-white">Services</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl">
              Deploy AI-powered chatbots to scale support.
            </p>

            {/* Explore Services Button */}
            <div className="mt-6">
              <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-transparent">
                <button
                  className="px-6 py-2.5 rounded-full
                  bg-gradient-to-r from-black/90 via-purple-900/40 to-black/90
                  backdrop-blur-lg
                  text-sm font-medium text-white/90
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.6)]
                  hover:bg-white/10 transition flex items-center gap-2"
                >
                  Explore Services →
                </button>
              </div>
            </div>
          </div>

          {/* Service Cards Grid (staggered layout + glassy style) */}
          <div className="max-w-6xl mx-auto relative mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="transform md:translate-y-4">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <img src="/icon1.png" alt="AI Chatbots" className="h-10 w-10 opacity-90" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">AI Chatbots</h3>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Automate customer conversations with intelligent, context-aware chatbots.
                  </p>

                  {/* Button */}
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="transform md:-translate-y-2">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon2.png" alt="CRM Automation" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">CRM Automation</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Streamline customer relationship management with AI-driven workflows.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="transform md:-translate-y-6">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon3.png" alt="Analytics Dashboard" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Analytics Dashboard</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Gain insights with real-time analytics and performance dashboards.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="transform md:translate-y-4">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon4.png" alt="Marketing Automation" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Marketing Automation</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    End-to-end setup for streamlined marketing operations.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="transform md:-translate-y-2">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon5.png" alt="BPM Consulting" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">BPM Consulting</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Process optimization and business workflow automation.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="transform md:-translate-y-6">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon6.png" alt="Helpdesk Support" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Helpdesk Support</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Freshdesk, Zendesk, Kapture CX, and more.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
                <section
          className="relative z-10 py-20 px-6 bg-cover bg-top"
          style={{
            backgroundImage: "url('/landingbg-4.png')",
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="text-gray-300">Why</span>
              <span className="text-white"> SuperCX</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl">
              Why Global Brands Choose SuperCX
            </p>

            {/* Explore Services Button */}
            {/* <div className="mt-6">
              <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-transparent">
                <button
                  className="px-6 py-2.5 rounded-full
                  bg-gradient-to-r from-black/90 via-purple-900/40 to-black/90
                  backdrop-blur-lg
                  text-sm font-medium text-white/90
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.6)]
                  hover:bg-white/10 transition flex items-center gap-2"
                >
                  Explore Services →
                </button>
              </div>
            </div> */}
          </div>

          {/* Service Cards Grid (staggered layout + glassy style) */}
          <div className="max-w-6xl mx-auto relative mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="transform md:translate-y-4">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <img src="/icon1.png" alt="AI Chatbots" className="h-10 w-10 opacity-90" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">AI Chatbots</h3>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Automate customer conversations with intelligent, context-aware chatbots.
                  </p>

                  {/* Button */}
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="transform md:-translate-y-2">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon2.png" alt="CRM Automation" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">CRM Automation</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Streamline customer relationship management with AI-driven workflows.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="transform md:-translate-y-6">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon3.png" alt="Analytics Dashboard" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Analytics Dashboard</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Gain insights with real-time analytics and performance dashboards.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="transform md:translate-y-4">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon4.png" alt="Marketing Automation" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Marketing Automation</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    End-to-end setup for streamlined marketing operations.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="transform md:-translate-y-2">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon5.png" alt="BPM Consulting" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">BPM Consulting</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Process optimization and business workflow automation.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="transform md:-translate-y-6">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
                <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/5 transition flex flex-col">
                  
                  <div className="mb-4">
                    <img src="/icon6.png" alt="Helpdesk Support" className="h-10 w-10 opacity-90" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Helpdesk Support</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">
                    Freshdesk, Zendesk, Kapture CX, and more.
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 backdrop-blur-md text-white/90 font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.4)] hover:bg-white/10 transition flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* OUR PRODUCTS (dual layered backgrounds) */}
{/* OUR PRODUCTS — dome lifted, content inside */}
<section className="relative z-10 overflow-hidden px-6 py-24">
  {/* Base background */}
  <div
    className="absolute inset-0 -z-20 bg-top bg-no-repeat bg-cover"
    style={{ backgroundImage: "url('/landingbg-4.png')" }}
  />

  {/* Dome / Arc */}
  <div
    className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2
               w-[190%] md:w-[170%] lg:w-[150%]
               h-[1000px] md:h-[1100px] lg:h-[1200px]
               bg-no-repeat bg-top bg-contain"
    style={{
      backgroundImage: "url('/landing-bg-2.png')",
      top: "-280px",        // lift the dome higher
    }}
  />

  {/* soft overlay */}
  <div className="absolute inset-0 -z-10 bg-black/10" />

  {/* Content INSIDE the dome */}
  <div className="relative max-w-6xl mx-auto text-center pt-[160px] md:pt-[200px] lg:pt-[240px]">
    {/* pill */}
    <div className="mx-auto w-fit mb-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                      bg-white/5 border border-white/10 backdrop-blur-md
                      text-sm text-white/80 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <span>✨ Super Products</span>
      </div>
    </div>

    {/* heading + subheading */}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
      Our Products
    </h2>
    <p className="mt-3 text-base md:text-lg text-gray-300">
      AI-Powered Platform Built for Scale
    </p>

    {/* cards */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr] items-stretch">
      <Card
        icon="/icon1.png"
        title="SuperCX"
        description="Omnichannel CX with AI, reporting & KPIs."
      />
      <Card
        icon="/icon2.png"
        title="SuperVoice"
        description="AI voice agents."
      />
      <Card
        icon="/icon3.png"
        title="SuperDesk"
        description="Intelligent helpdesk."
      />
    </div>

    {/* CTA */}
    <div className="mt-10">
      <button
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-black/80 via-purple-900/40 to-black/80
                   text-white/90 font-medium backdrop-blur-md border border-white/10
                   shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:bg-white/10 transition"
      >
        Learn More →
      </button>
    </div>
  </div>
</section>





    </main>
  );
}
