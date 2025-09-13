import Card from "./components/Card";
import { LuMoveRight } from "react-icons/lu";
import CardsGrid from "./components/CardsGrid";
import Card1 from "./components/Card1";
import CardsCarousel from "./components/sliding_cardsCarousel";



export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative z-10 min-h-screen flex flex-col items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/landing-bg-1.svg')" }}
      >
        {/* NAVBAR */}
        <header className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-6">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />

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
          <div className="rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] w-fit p-[1px]">
            <button
              className="flex flex-row gap-2 items-center 
                        px-5 py-2 
                        bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                        text-white text-sm font-medium 
                        rounded-full 
                        transition transform duration-200 
                        hover:scale-105 hover:brightness-110"
            >
              Get in Touch
              <LuMoveRight className="text-sm" />
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
            <button
              className="relative text-subtle-gradient font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400
                        after:transition-all after:duration-300 hover:after:w-full"
            >
              Book a Free Consultation
            </button>


            <div className="inline-block rounded-full p-[0.5px] bg-gradient-to-br from-white/25 via-white/10 to-transparent">
              <button
                className="btn-cta flex items-center gap-2"
                type="button"
                aria-label="Learn more about our products"
              >
                <span>Explore Our Products</span>
                <span className="btn-arrow" aria-hidden="true">
                  <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3
            className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-center mb-6
                      bg-gradient-to-r from-[#ffffff] via-[#d2c6d6] to-[#b08acb]
                      bg-clip-text text-transparent"
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
      <section
        className="relative z-10 py-20 px-6 bg-cover bg-top"
        style={{ backgroundImage: "url('/landing-bg-4.svg')" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-300">Our </span>
            <span className="text-subtle-gradient">Services</span>
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl">
            Deploy AI-powered chatbots to scale support.
          </p>

          {/* Explore Services Button */}
          <div className="mt-6">
            <div className="rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] w-fit p-[1px]">
              <button
                className="flex flex-row items-center gap-2 
                          px-5 py-2 
                          bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                          text-white text-sm font-medium 
                          rounded-full 
                          transition transform duration-200 
                          hover:scale-105 hover:brightness-110"
              >
                Explore Services
                <LuMoveRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
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
                  <button className="btn-cta" type="button" aria-label="Learn more about this service">
                    <span>Learn More</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose superCX */}
      <section className="relative z-10 overflow-hidden px-6 py-10">
        {/* Base background */}
        <div
          className="absolute inset-0 -z-20 bg-top bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/landing-bg-4.svg')" }}
        />

        {/* Section content */}
        <div className="text-center">
          {/* Small gradient button-like tag */}
          <div className="mx-auto mb-6 w-fit rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
            <button
              className="flex flex-row gap-2 items-center 
                        px-5 py-2 
                        bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                        text-white text-sm font-medium 
                        rounded-full 
                        transition transform duration-200 
                        hover:scale-105 hover:brightness-110"
            >
                            <img
                src="/supercx-icon.svg"
                alt="icon"
                className="w-4 h-4"
              /> Why Choose Us
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-subtle-gradient">
              Why <span className="text-gray-300">Global Brands</span> <br />
              Choose Super
            </span>

            {/* Proper gradient text for CX */}
            <span
              className="ml-1 inline-block text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(90deg, #C80EAA 0%, #AC2723 50%, #DB6C3D 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              CX
            </span>
          </h2>

        </div>
        <CardsGrid />
      </section>




      {/* OUR PRODUCTS (dual layered backgrounds) */}
      <section className="relative z-10 overflow-hidden px-6 py-16">
        {/* Base background */}
        <div
          className="absolute inset-0 -z-20 bg-top bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/landing-bg-4.svg')" }}
        />

        {/* Dome / Arc */}
        <div
          className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2
               w-[190%] md:w-[170%] lg:w-[150%]
               h-[1000px] md:h-[1100px] lg:h-[1200px]
               bg-no-repeat bg-top bg-contain"
          style={{
            backgroundImage: "url('/landing-bg-2.svg')",
            top: "-280px",
          }}
        />

        {/* soft overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        {/* Content INSIDE the dome */}
        <div className="relative max-w-6xl mx-auto text-center pt-[100px] md:pt-[140px] lg:pt-[120px]">
          {/* pill */}
          {/* pill as button */}
            <div className="mx-auto w-fit mb-4 rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
              <button
                className="flex items-center gap-2 
                          px-5 py-2 
                          bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                          text-white text-sm font-medium 
                          rounded-full 
                          transition transform duration-200 
                          hover:scale-105 hover:brightness-110"
              >
                <img
                  src="/supercx-icon.svg"
                  alt="icon"
                  className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                />
                <span>Super Products</span>
              </button>
            </div>




          {/* heading + subheading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-subtle-gradient">
            Our Products
          </h2>
          <p className="mt-3 text-base md:text-lg text-subtle-gradient">
            AI-Powered Platform Built for Scale
          </p>


          {/* cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <img src="/products/Card.svg" alt="SuperCX" className="w-[320px] h-auto" />
            <img src="/products/Card1.svg" alt="SuperVoice" className="w-[320px] h-auto" />
            <img src="/products/Card2.svg" alt="SuperDesk" className="w-[320px] h-auto" />
          </div>



          {/* CTA */}
          <div className="mx-auto w-fit mb-4 rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px] mt-8">
            <button
              className="flex items-center gap-2 
                        px-5 py-2 
                        bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                        text-white text-sm font-medium 
                        rounded-full 
                        transition transform duration-200 
                        hover:scale-105 hover:brightness-110"
            >
              <img
                src="/supercx-icon.svg"
                alt="icon"
                className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              />
              <span>Learn More</span>
            </button>
</div>

        </div>
      </section>

      <section className="relative z-10 overflow-hidden">
        {/* Base background (unchanged) */}
        <div
          className="absolute inset-0 -z-20 bg-top bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/landing-bg-4.svg')" }}
        />

        {/* Centered Metrics (full-bleed image, pulled up) */}
        <div className="flex justify-center -mt-20">
          <img
            src="/metrics.png"
            alt="Impact Metrics"
            className="w-full max-w-none h-auto"
            style={{
              // optional: slightly enlarge on very wide screens (tweak as needed)
              transform: "scale(1.02)",
            }}
          />
        </div>
      </section>


      {/* CASE STUDIES / SLIDING CARDS SECTION */}
      <section className="relative z-10 py-20 px-6 bg-cover bg-top" style={{ backgroundImage: "url('/landing-bg-4.svg')" }}>


          {/* Render your carousel component */}
          <div className="mt-8">
            <CardsCarousel />
          </div>
      </section>

<section
  className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 bg-cover bg-center text-center"
  style={{
    backgroundImage: "url('/landing-bg-5.svg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 w-full px-8 -mt-16">
    {/* Pill */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                    bg-white/10 border border-white/20 shadow-sm text-sm font-medium text-white mb-6">
      <img
        src="/supercx-icon.svg"
        alt="icon"
        className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
      />
      What Our Clients Say
    </div>

    <img
      src="/semicolon.png"   // move your uploaded file into /public and rename if needed
      alt="decorative element"
      className="mx-auto mb-6 w-20 h-auto"   // adjust w-20 (width) as per Figma
    />

    {/* Heading (3 forced lines) */}
      <h2 className="w-full text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-subtle-gradient max-w-none">
        <span className="block">SuperCX transformed our customer support</span>
        <span className="block">— response times cut from 12 hours</span>
        <span className="block">to 1.5 hours.</span>
      </h2>

    {/* Attribution */}
    <p className="mt-4 text-base md:text-lg text-gray-300">
      CX Head, Retail Brand
    </p>

    {/* Pagination Dots */}
    <div className="mt-8 flex justify-center gap-11">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`w-20 h-20 rounded-full ${
            i === 2
              ? "border-2 border-white"
              : "bg-white/10"
          }`}
        ></span>
      ))}
    </div>
  </div>


</section>

<section
  className="relative z-10 py-20 px-6 bg-cover bg-center "
  style={{ backgroundImage: "url('/landing-bg-6.svg')" }}
>
  {/* Overlay for readability (optional) */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 max-w-6xl mx-auto">


    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-12">
      <span className="text-gray-300">Solutions </span>
      <span className="text-subtle-gradient">by Industry</span>
    </h2>

        {/* Pill */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                    bg-white/10 border border-white/20 shadow-sm text-sm font-medium text-white mb-6">
      AI Solutions Tailored for Your Industry
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
  {/* Card 1 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md hover:bg-white/10 transition  h-[250px] w-[500px] flex flex-col">
      <img src="/paddedLogo.png" alt="icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
      <p className="text-gray-300 text-sm">
        Abandoned cart recovery, WhatsApp bots.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md hover:bg-white/10 transition h-[250px] w-[500px] flex flex-col">
      <img src="/paddedLogo.png" alt="icon" className="w-8 h-8 mb-4" />
      <h3 className="text-xl font-semibold mb-2">BFSI</h3>
      <p className="text-gray-300 text-sm">
        Secure, multilingual chatbots, voice banking.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md hover:bg-white/10 transition h-[250px] w-[500px] flex flex-col">
      <img src="/paddedLogo.png" alt="icon" className="w-8 h-8 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
      <p className="text-gray-300 text-sm">
        Appointment scheduling, telehealth bots.
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md hover:bg-white/10 transitionh-[250px] w-[500px] flex flex-col">
      <img src="/paddedLogo.png" alt="icon" className="w-8 h-8 mb-4" />
      <h3 className="text-xl font-semibold mb-2">SaaS</h3>
      <p className="text-gray-300 text-sm">
        Lead nurturing automation, helpdesk bots.
      </p>
    </div>
  </div>

  <div className="relative mt-36">
  <img
    src="/arch.png"
    alt="decorative background"
    className="mx-auto w-[95%] md:w-[90%] lg:w-[85%] max-w-[1800px] opacity-90"
  />

      {/* Content overlaid on top of it */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src="/supercx-icon.svg" alt="icon" className="w-8 h-8 mb-4" />
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          Ready To Scale Smarter With AI?
        </h3>
        <p className="mt-3 text-gray-300 max-w-md">
          Let’s transform your customer experience with SuperCX.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <div className="rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
            <button className="px-5 py-2 rounded-full bg-gradient-to-b from-[#10151D] to-[#1D1F1E] text-white text-sm font-medium hover:scale-105 hover:brightness-110 transition">
              Contact Sales
            </button>
          </div>
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-[1px]">
            <button className="px-5 py-2 rounded-full bg-gradient-to-b from-[#10151D] to-[#1D1F1E] text-white text-sm font-medium hover:scale-105 hover:brightness-110 transition">
              Book a Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>




     <section
      className="relative z-10 w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/colorcolor.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container (centered, constrained) */}
      <div className="relative z-10 w-full px-6 py-20 text-center">
        {/* Top Icon Pill */}
        <div className="mx-auto w-fit mb-6 rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-[#10151D] to-[#1D1F1E]">
            <img src="/blog-icon.png" alt="Blog Icon" className="w-6 h-6" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="text-gray-300">Blog</span>
          <span className="text-subtle-gradient">/Insights</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12">
          Latest Insights in AI & Customer Experience
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-md hover:bg-white/10 transition flex flex-col min-h-[600px]"
            >
              {/* Image Placeholder */}
              <div className="w-full h-60 bg-white rounded-xl mb-6"></div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-white">
                Lorem ipsum dolor sit amet,
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
                mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="mt-4 inline-block text-sm text-white/80 hover:text-pink-400 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>


{/* Footer section */}


  <footer className="w-full bg-[#080716] text-gray-300">
  {/* Top Row: Logo + Newsletter */}
  <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
    {/* Left side: Logo + tagline */}
    <div>
      <img src="/logo.svg" alt="SuperCX Logo" className="h-10 mb-4" />
      <p className="text-sm md:text-base">
        Get AI-powered CX trends in your inbox
      </p>
    </div>

    {/* Right side: Newsletter */}
    <div className="max-w-md">
      <h4 className="font-semibold mb-4">Newsletter</h4>
      <p className="text-sm md:text-base mb-4">
        Get AI-powered CX trends in your inbox
      </p>
      <form className="flex gap-3">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 rounded-full px-4 py-2 bg-black/40 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow hover:brightness-110 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Links Grid */}
  <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Products</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">SuperCX</a></li>
        <li><a href="#">SuperVoice</a></li>
        <li><a href="#">SuperDesk</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Services</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">AI Chatbots</a></li>
        <li><a href="#">CRM Implementation</a></li>
        <li><a href="#">Helpdesk Support</a></li>
        <li><a href="#">Marketing Automation</a></li>
        <li><a href="#">BPM Consulting</a></li>
        <li><a href="#">Integration Services</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Solutions</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">E-commerce</a></li>
        <li><a href="#">BFSI</a></li>
        <li><a href="#">Healthcare</a></li>
        <li><a href="#">SaaS</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Blogs</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Lorem ipsum dolor</a></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#"><img src="/Facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
        <a href="#"><img src="/Twitter.svg" alt="X" className="w-5 h-5" /></a>
        <a href="#"><img src="/Instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
        <a href="#"><img src="/Linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
      </div>

      {/* Copyright */}
      <p className="text-center">© 2025 SuperCX. All rights reserved.</p>

      {/* Policy */}
      <a href="#" className="hover:text-pink-400">Privacy & Cookie Policy</a>
    </div>
  </div>
</footer>


  
  </div>
</section>




      
    </main>
  );
}
