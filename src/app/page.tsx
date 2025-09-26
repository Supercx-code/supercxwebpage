import Card from "./components/Card";
import { LuMoveRight } from "react-icons/lu";
import CardsGrid from "./components/CardsGrid";
import Card1 from "./components/Card1";
import CardsCarousel from "./components/sliding_cardsCarousel";
import GlassyButton from "./components/GlassyButton";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080716] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col items-center text-center px-4 sm:px-6 bg-cover bg-center bg-[#080716]">
        {/* Left gradient SVG */}
        <div className="absolute inset-y-0 left-0 -translate-x-[60%] sm:-translate-x-[50%] lg:-translate-x-[60%] w-[200px] sm:w-[500px] lg:w-[800px] pointer-events-none">
          <img
            src="/homepage-left-elipse.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        {/* Right gradient SVG */}
        <div className="absolute inset-y-0 right-0 translate-x-[60%] sm:translate-x-[50%] lg:translate-x-[60%] w-[200px] sm:w-[500px] lg:w-[800px] pointer-events-none">
          <img
            src="/homepage-right-elipse.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        {/* Middle gradient (anchored top, cut top half) */}
        <div className="absolute inset-x-0 top-0 h-[60%] sm:h-[70%] lg:h-full overflow-hidden flex justify-center pointer-events-none">
          <img
            src="/homepage-elipse3.svg"
            alt=""
            className="
              w-[1200px] h-[600px]
              sm:w-[2000px] sm:h-[1000px]
              lg:w-[4000px] lg:h-[2000px]
              object-contain
              -translate-y-[45%] sm:-translate-y-[55%] lg:-translate-y-[60%]
              translate-x-[5%] sm:translate-x-[10%] lg:translate-x-[10%]
            "
          />
        </div>

        {/* NAVBAR */}
        <header className="relative z-20 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="Logo" className="h-12 sm:h-16 w-auto" />
          </div>

          {/* Nav Links */}
          <Navbar />

          {/* CTA Button */}
          <div className="flex-shrink-0 ml-auto">
            <div className="rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] w-fit p-[1px]">
              <GlassyButton>Get in Touch →</GlassyButton>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[95%] sm:max-w-3xl lg:max-w-4xl mt-16 sm:mt-20 px-2 sm:px-4">
          <h1
            className="mx-auto w-full text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-tight sm:leading-[1.2] text-center"
            style={{
              background:
                "radial-gradient(circle, rgba(230,230,230,1) 70%, rgba(150,150,150,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Revolutionize Customer Experience with AI-Powered Solutions
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-normal text-gray-300 max-w-[95%] sm:max-w-2xl mx-auto leading-relaxed">
            From intelligent chatbots to CRM and marketing automation, SuperCX helps businesses
            scale smarter, faster, and more efficiently.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap">
            <button
              className="relative text-sm sm:text-base font-medium text-subtle-gradient
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Book a Free Consultation
            </button>

            <div className="inline-block rounded-full p-[1px]">
              <button
                className="btn-cta flex items-center gap-2 px-6 py-3 text-base font-medium 
                          text-white rounded-full
                          transition-all duration-300 hover:brightness-110"
                type="button"
                aria-label="Learn more about our products"
                style={{
                  background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                }}
              >
                <span>Explore Our Products</span>
                <span className="btn-arrow" aria-hidden="true">
                  <img
                    src="/streamline_diamond-2.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-12 sm:mt-20 max-w-[95%] sm:max-w-6xl mx-auto">
          <h3
            className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight text-center mb-4 sm:mb-6
              bg-gradient-to-r from-[#ffffff] via-[#d2c6d6] to-[#b08acb]
              bg-clip-text text-transparent"
          >
            Trusted By
          </h3>

          <div className="flex justify-center">
            <img
              src="/trustedcompanies.png"
              alt="Trusted By Companies"
              className="w-full max-w-md sm:max-w-3xl lg:max-w-5xl rounded-2xl shadow-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* SERVICES SECTION */}
      <section
        className="relative z-10 py-20 px-6 bg-[#080716]" // ✅ Matches hero background
      >
        <div className="absolute inset-x-0 top-0 h-[70%] sm:h-[80%] lg:h-full overflow-hidden flex justify-center pointer-events-none -z-10">
          <img
            src="/two.svg"
            alt=""
            className="
              w-[2800px] h-[1200px]              /* base: bigger than 2000x800 */
              sm:w-[3600px] sm:h-[1600px]        /* sm: bigger than 2500x1000 */
              lg:w-[5600px] lg:h-[2600px]        /* lg: bigger than 4500x2000 */
              object-contain
              -translate-y-[8%] sm:-translate-y-[18%] lg:-translate-y-[15%]  /* adjusted to keep centered */
              translate-x-[5%] sm:translate-x-[10%] lg:translate-x-[0%]       /* keeps balance */
            "
          />
        </div>
        {/* Section Header */}
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
              <GlassyButton>Explore Services →</GlassyButton>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="max-w-6xl mx-auto relative mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="transform md:translate-y-4">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon1.png" alt="AI Chatbots" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">AI Chatbots</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  Automate customer conversations with intelligent, context-aware chatbots.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about AI Chatbots"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform md:-translate-y-2">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon2.png" alt="CRM Automation" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">CRM Automation</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  Streamline customer relationship management with AI-driven workflows.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about CRM Automation"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform md:-translate-y-6">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon3.png" alt="Analytics Dashboard" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Analytics Dashboard</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  Gain insights with real-time analytics and performance dashboards.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about Analytics Dashboard"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="transform md:translate-y-4">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon4.png" alt="Marketing Automation" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Marketing Automation</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  End-to-end setup for streamlined marketing operations.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about Marketing Automation"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="transform md:-translate-y-2">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon5.png" alt="BPM Consulting" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">BPM Consulting</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  Process optimization and business workflow automation.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about BPM Consulting"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="transform md:-translate-y-6">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/2 to-transparent">
              <div className="h-full w-full rounded-2xl p-6 bg-white/2 backdrop-blur-2xl 
                              border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/5 transition flex flex-col">
                <div className="mb-4">
                  <img src="/icon6.png" alt="Helpdesk Support" className="h-10 w-10 opacity-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Helpdesk Support</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  Freshdesk, Zendesk, Kapture CX, and more.
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-full p-[1px]">
                    <button
                      className="flex items-center gap-2 px-6 py-3 text-base font-medium 
                                text-white rounded-full transition-all duration-300 hover:brightness-110"
                      type="button"
                      aria-label="Learn more about Helpdesk Support"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8 0%, #db2777 60%, #f97316 100%)"
                      }}
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">
                        <img src="/streamline_diamond-2.svg" alt="" className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Matches hero background, removed image */}
        
        {/* Content */}
        <div className="text-center  pt-16 md:pt-24 lg:pt-28">
          {/* Gradient pill */}
          <div className="mx-auto mb-6 w-fit">
            <div className="rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[2px]">
              <GlassyButton>
                <img
                  src="/supercx-icon.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
                Why Choose Us
              </GlassyButton>
            </div>
          </div>


          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-subtle-gradient">
              Why <span className="text-gray-300">Global Brands</span> <br />
              Choose Super
            </span>
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

        {/* Cards Grid Component */}
        <CardsGrid />
      </section>
 {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Section 3: Why Choose SuperCX */}
{/* PRODUCTS SECTION */}
      <section className="relative z-10 py-20 px-6 bg-[#080716]">
        {/* Background */}
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

        {/* Soft overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        {/* Dark bottom fade overlay */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080716] to-transparent -z-10" />

        {/* Content inside dome */}
        <div className="relative text-center pt-[100px] md:pt-[140px] lg:pt-[120px]">
          {/* Pill */}
          <div className="mx-auto w-fit mb-4 rounded-full bg-gradient-to-br 
                          from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
            <GlassyButton>
              <img
                src="/supercx-icon.svg"
                alt="icon"
                className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              />
              <span>Super Products</span>
            </GlassyButton>
          </div>

          {/* Heading + Subheading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-subtle-gradient">
            Our Products
          </h2>
          <p className="mt-3 text-base md:text-lg text-subtle-gradient">
            AI-Powered Platform Built for Scale
          </p>

          {/* Product Cards */}
          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            <img src="/products/Card.svg" alt="SuperCX" className="w-full max-w-sm mx-auto" />
            <img src="/products/Card1.svg" alt="SuperVoice" className="w-full max-w-sm mx-auto" />
            <img src="/products/Card2.svg" alt="SuperDesk" className="w-full max-w-sm mx-auto" />
          </div>

          {/* CTA Button */}
          <div className="mx-auto w-fit rounded-full bg-gradient-to-br 
                          from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px] mt-10">
            <GlassyButton>
              <img
                src="/supercx-icon.svg"
                alt="icon"
                className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              />
              <span>Learn More</span>
            </GlassyButton>
          </div>

          {/* Metrics Image */}
          {/* <div className="flex justify-center -mt-80">
            <img
              src="/metrics.png"
              alt="Impact Metrics"
              className="w-full max-w-none h-auto"
              style={{
                transform: "scale(1.02)", // slight upscale on wide screens
              }}
            />
          </div> */}
        </div>
        
      </section>


{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* Case Studies / Sliding Cards Section */}
<section className="relative z-10 py-10 px-6 bg-[#080716] overflow-hidden">
  {/* Left gradient */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                  bg-gradient-to-tr from-purple-700/40 to-pink-500/30 blur-[120px] -z-10" />
  
  {/* Right gradient */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full 
                  bg-gradient-to-tl from-orange-500/30 to-pink-600/40 blur-[120px] -z-10" />

  {/* Carousel */}
  <div className="mt-20 relative">
    <CardsCarousel />
  </div>
</section>

      








    </main>
  );
}
