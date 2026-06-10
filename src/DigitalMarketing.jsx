import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Check,
  Globe,
  Award,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import logo from "/TMLogo.jpg";

const DigitalMarketing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const countries = [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ];

  // UAE Pricing Data
  const pricingData = [
    {
      title: "Social Media Management (SMM)",
      price: "AED 850",
      period: "/ month",
      description: "Increase brand awareness and build an active online community.",
      features: [
        "Creative Graphic Design & Video Reels",
        "Consistent Posting (Grid + Stories)",
        "Audience & Community Management",
        "Detailed Performance Reporting",
        "Strategic Content Planning"
      ],
    },
    {
      title: "Paid Ads Management",
      price: "AED 1500",
      period: "/ month",
      description: "Targeted campaigns to drive instant qualified leads and sales.",
      features: [
        "Google & Meta (FB/IG) Ad Setup",
        "In-depth Competitor Auditing",
        "Precise Audience Demographics Setup",
        "Continuous Performance Optimization",
        "Transparent ROI Analytics Reporting"
      ],
    },
    {
      title: "Basic Website Development",
      price: "AED 3000",
      period: "One-time payment",
      description: "Fast, modern, and professional web presence for small business.",
      features: [
        "Custom Up to 5 Pages Layout",
        "Fully Mobile Responsive Code",
        "Contact Form & Map Integration",
        "Standard On-page SEO Setup",
        "Fast Domain & Hosting Setup support"
      ],
    },
    {
      title: "E-commerce Website",
      price: "AED 4000",
      period: "One-time payment",
      description: "Feature-rich store designed to maximize sales and payments.",
      features: [
        "Secure Payment Gateway Setup",
        "Product Catalog & Interactive Cart",
        "Simple Admin Inventory Panel",
        "SSL Security Certificate integration",
        "Discounts & Coupons Engine"
      ],
    },
    {
      title: "Custom Website Development",
      price: "AED 3000",
      period: "Starting from",
      description: "Highly scalable, custom-built application for unique requirements.",
      features: [
        "100% Unique Bespoke UI/UX Design",
        "Advanced System Integration (APIs)",
        "Premium Performance & Speed tuning",
        "Scalable Code Structure & Logic",
        "30 Days Post-launch Support"
      ],
    },
    {
      title: "Website Maintenance",
      price: "AED 850",
      period: "/ month",
      description: "Continuous care, updates, and protection for your digital assets.",
      features: [
        "Weekly Backups & Malware Scans",
        "Core & Plugin Regular Updates",
        "Graphics & Copy updates (up to 3 hrs/mo)",
        "Fast Bug & Technical Issue Fixes",
        "Uptime Monitoring & Performance checks"
      ],
    },
  ];

  // Benefits Content
  const benefits = [
    {
      title: "Data-Driven ROI",
      description: "We don't focus on vanity metrics. Our strategies target hard conversions, leads, and actual sales for your brand.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Deep Middle East Insights",
      description: "We understand local consumer behaviors, Arabic/English bilingual expectations, and market trends across the UAE & GCC.",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Fast & Transparent Execution",
      description: "Whether it's an emergency website fix or launching a time-sensitive ad campaign, we deliver promptly with daily updates.",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Continuous Maintenance & Care",
      description: "Once your project is live, we stand right beside you with strong post-launch support and regular digital audits.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    },
  ];

  // Process Content
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your target market, competitors, and specific business targets to build a custom roadmap.",
    },
    {
      num: "02",
      title: "Design & Blueprinting",
      desc: "We create stunning mockups and outline content plans, keeping user experience (UX) and conversions first.",
    },
    {
      num: "03",
      title: "Development & Testing",
      desc: "Our developers translate designs into robust code, while our media buyers set up precise ad frameworks.",
    },
    {
      num: "04",
      title: "Launch & Continuous Optimization",
      desc: "We launch with proper tracking. Then, we study user data to optimize ads and refine web features for maximum returns.",
    },
  ];

  // FAQs Content
  const faqs = [
    {
      question: "How long does it take to see results from Paid Ads?",
      answer: "Paid marketing (like Google Search Ads or Meta Campaigns) can start showing traffic and incoming inquiries within 48 to 72 hours of going live. However, the initial 14 days are critical for 'algorithm learning' and audience optimization, during which we continuously adjust bids to lower your acquisition costs.",
    },
    {
      question: "What is your standard turnaround time for Website Development?",
      answer: "For a Basic Website (Up to 5 pages), it generally takes 7 to 10 business days, assuming all content assets are ready. E-commerce platforms and Custom Software usually take 3 to 6 weeks, which includes comprehensive cross-browser and payment gateway testing.",
    },
    {
      question: "Are your pricing structures flexible for startups or small firms?",
      answer: "Yes, we deeply understand that early-stage businesses have different budgets. If you need a customized combination of services (for example: SMM combined with Basic Paid Ads), we can design a specialized bundled package with a budget that aligns with your financial boundaries.",
    },
    {
      question: "Do you provide hosting, domain, and technical setup services?",
      answer: "We assist our clients with setting up their domain names, high-speed hosting systems, and professional emails. While the raw hosting/domain license fees are paid directly to providers, we carry out all technical configurations (nameservers, SSL, email routing) free of cost as part of our web development package.",
    },
    {
      question: "How do you handle reporting and transparency?",
      answer: "We provide comprehensive monthly reports outlining exactly how your ad budget was spent, the number of clicks/impressions generated, the average cost-per-lead, and overall conversion performance. For web maintenance, we send a summary of weekly security backups and completed system updates.",
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      
      {/* Navigation (Matches Home Header) */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="logo" className="h-16 w-20 " />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Tuition Mantra
                </span>
              </Link>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </a>
              <a href="/#courses" className="text-gray-700 hover:text-blue-600 transition">
                Courses
              </a>
              <a href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition">
                Testimonials
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/#about"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#courses"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="/#testimonials"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero / Sub-header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
            Professional Web & Marketing Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Accelerate Your Business Growth <br />in the GCC Region
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Maximize your customer acquisition, build robust e-commerce architectures, and dominate local search channels with custom pricing models.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="px-4 py-2 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm font-semibold"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section / Authority Banner */}
      <section className="bg-blue-900 text-white py-10 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-300">50+</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">Successful Brands Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-300">150%+</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">Average Traffic Growth</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-300">100%</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">Satisfaction & Support</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-300">24/7</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">Continuous Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Strategic Businesses Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our marketing models are focused on absolute results, helping Middle East brands outperform standard market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-blue-50/60 rounded-xl border border-blue-100 hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid Section (The Core UAE Content) */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Middle East Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, upfront plans with no hidden processing fees. Choose a package designed around your operational scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-between border border-gray-200"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-xs uppercase tracking-wider">Premium Service Structure</p>
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 italic mb-4">{item.description}</p>
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      Core Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {item.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600 block">
                        {item.price}
                      </span>
                      {item.period && (
                        <span className="text-xs text-gray-500 font-medium">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <a
                      href={`https://wa.me/917053184840?text=Hi Tuition Mantra marketing team, I am interested in your ${item.title} package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-center w-full sm:w-auto"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Packages Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Looking for a Custom Package?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Startups and corporations often need bespoke, bundled strategies. Let us configure a high-efficiency framework specifically designed for your unique operational volume.
            </p>
            <a
              href="https://wa.me/917053184840?text=Hi Tuition Mantra, I want to discuss a custom package for Digital Marketing / Web development."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Contact for Custom Plan
            </a>
          </div>
        </div>
      </section>

      {/* Our 4-Step Working Process Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Turn Strategies Into Sales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined workflow guarantees clear expectations, timely updates, and steady milestones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-blue-600 block mb-3">{step.num}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-2">
              <HelpCircle className="text-blue-600 h-8 w-8 flex-shrink-0" /> Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Clear, straightforward answers about project setups, payments, and standard timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-gray-900 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section (Matches Home Footer) */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="logo" className="h-16 w-20 rounded-lg " />
                <span className="ml-2 text-xl font-bold">Tuition Mantra</span>
              </div>
              <p className="text-gray-400">
                Premium online tuition trusted by Gulf families for academic excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
                <a
                  href="/#about"
                  className="block text-gray-400 hover:text-white transition"
                >
                  About
                </a>
                <a
                  href="/#courses"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Courses
                </a>
                <a
                  href="/#contact"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Serving Gulf Countries</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                {countries.map((country) => (
                  <p key={country}>{country}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tuition Mantra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketing;