import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, TrendingUp, Shield, CheckCircle2, ArrowRight, Target, Award, Briefcase, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPortfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [adelantoImageIndex, setAdelantoImageIndex] = useState(0);
  const [rochesterImageIndex, setRochesterImageIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Adelanto images
  const adelantoImages = [
    { src: '/photos/Adelanto Grow Room.jpg', alt: 'Adelanto Cultivation Grow Room' },
    { src: '/photos/Adelanto Flower Room 2.jpg', alt: 'Adelanto Flower Room' },
    { src: '/photos/Adelanto Farm.jpg', alt: 'Adelanto Farm Exterior' },
    { src: '/photos/Adelanto CO2 Tank.jpg', alt: 'Adelanto CO2 System' },
    { src: '/photos/Adelanto Flower Room.jpg', alt: 'Adelanto Flower Room' },
    { src: '/photos/Adelanto Flower Room 3.jpg', alt: 'Adelanto Flower Room 3' },
    { src: '/photos/Adelanto Hallway.jpg', alt: 'Adelanto Facility Hallway' }
  ];

  // Rochester images
  const rochesterImages = [
    { src: '/photos/Cannabis Rochestor 1.png', alt: 'Cannabis Rochester Retail Location 1' },
    { src: '/photos/Cannabis Rochestor 2.png', alt: 'Cannabis Rochester Retail Location 2' }
  ];

  const nextAdelantoImage = () => {
    setAdelantoImageIndex((prev) => (prev + 1) % adelantoImages.length);
  };

  const prevAdelantoImage = () => {
    setAdelantoImageIndex((prev) => (prev - 1 + adelantoImages.length) % adelantoImages.length);
  };

  const nextRochesterImage = () => {
    setRochesterImageIndex((prev) => (prev + 1) % rochesterImages.length);
  };

  const prevRochesterImage = () => {
    setRochesterImageIndex((prev) => (prev - 1 + rochesterImages.length) % rochesterImages.length);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xaqdwvyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <Link to="/" className="flex items-center space-x-2">
  <Leaf className="h-8 w-8 text-emerald-400" />
  <span className="text-2xl font-bold text-white">Synterra Group</span>
</Link>
<div className="flex items-center space-x-6">
  <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
  <Link to="/about-portfolio" className="text-emerald-400 font-semibold">About & Portfolio</Link>
</div>
          </div>
        </div>
      </nav>

      {/* Hero Section - The Narrative */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-500/10 text-emerald-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-500/20">
              Securing Premium Locations in Northern Virginia
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Proven Operators.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                Premium Returns.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              With 30,000+ square feet of operational cannabis facilities and successful retail launches across multiple states, we bring institutional expertise to Northern Virginia's emerging market. Our track record proves we deliver on our commitments—and our Lease Option model proves we put our money where our mouth is.
            </p>
          </div>

          {/* Value Props for Landlords */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$10,000</div>
              <div className="text-lg font-semibold text-white mb-2">Risk-Free Deposit</div>
              <div className="text-slate-400 text-sm">Yours to keep, zero obligation</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1.5x</div>
              <div className="text-lg font-semibold text-white mb-2">Market Rate Premium</div>
              <div className="text-slate-400 text-sm">Industry-leading lease rates</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">12 Mo.</div>
              <div className="text-lg font-semibold text-white mb-2">Option Period</div>
              <div className="text-slate-400 text-sm">Flexible licensing timeline</div>
            </div>
          </div>

          {/* About Us Grid */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 lg:p-12 border border-slate-700/50 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Property Owners Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto border border-emerald-500/20">
                  <Users className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-slate-300 leading-relaxed">
                  We've successfully operated 30,000+ sq ft of cultivation across California and Minnesota. We don't just make promises—we have receipts.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto border border-emerald-500/20">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Expertise</h3>
                <p className="text-slate-300 leading-relaxed">
                  As licensed operators in multiple states, we understand compliance inside and out. Your property is protected every step of the way.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto border border-emerald-500/20">
                  <TrendingUp className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Strength</h3>
                <p className="text-slate-300 leading-relaxed">
                  We're capitalized, connected, and committed. Our $10K upfront deposit demonstrates we're serious about securing your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-emerald-400">Experience</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We've built and operated cannabis facilities across two states. This experience is why we can confidently offer Northern Virginia landlords a risk-free $10,000 deposit and 1.5x market rate leases.
            </p>
          </div>

          {/* Project 1: Adelanto Cultivation Campus */}
          <div className="mb-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Carousel */}
              <div className="relative h-96 lg:h-auto overflow-hidden border-r border-slate-700/50 group">
                <img 
                  src={adelantoImages[adelantoImageIndex].src}
                  alt={adelantoImages[adelantoImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* Carousel Navigation */}
                <button
                  onClick={prevAdelantoImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextAdelantoImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {adelantoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setAdelantoImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === adelantoImageIndex 
                          ? 'bg-emerald-400 w-6' 
                          : 'bg-slate-500 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-emerald-500/20">
                  2021–2026
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">The Adelanto Cultivation Campus</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  A landmark project in California's Inland Empire, where we partnered with the visionary founder who pioneered cannabis legalization in Adelanto. Our team assembled the founding operations group and developed scalable SOPs for institutional-grade indoor cultivation.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">20,000+</div>
                    <div className="text-sm text-slate-400">Sq. Ft. Indoor Cultivation</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">2x</div>
                    <div className="text-sm text-slate-400">Grade-A Facilities</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">Founding Team Assembly:</strong> Recruited and trained cultivation, compliance, and operations leadership</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">SOP Development:</strong> Created scalable standard operating procedures for multi-room cultivation at institutional scale</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">Investor Relations:</strong> Managed capital deployment and stakeholder communications throughout buildout and operations</p>
                  </div>
                </div>

                <div className="bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/10">
                  <p className="text-emerald-300 text-sm font-semibold mb-1">Key Highlight</p>
                  <p className="text-slate-300 text-sm">
                    Working alongside the founder who pioneered cannabis legalization in Adelanto, we helped establish best-in-class cultivation standards that set the benchmark for the region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Rochester Flagship Retail */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content (Left Side for This One) */}
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-emerald-500/20">
                  2025–2026
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">The Rochester Flagship Retail</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Minnesota's first wave of recreational cannabis licensing created a unique opportunity: a high-income medical market with minimal retail saturation. We secured licensing, assembled the capital stack, and are building Rochester's premier cannabis retail destination.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">4,400</div>
                    <div className="text-sm text-slate-400">Sq. Ft. Premium Retail</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">1st</div>
                    <div className="text-sm text-slate-400">Wave Recreational License</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">License Holders:</strong> Navigated Minnesota's competitive application process to secure retail licensing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">Market Strategy:</strong> Identified high-income demographics, medical market overlap, and low-saturation entry point</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300"><strong className="text-white">Capital Formation:</strong> Structured investor relations and capital deployment for buildout and operations</p>
                  </div>
                </div>

                <div className="bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/10">
                  <p className="text-emerald-300 text-sm font-semibold mb-1">Strategic Advantage</p>
                  <p className="text-slate-300 text-sm">
                    Rochester's unique combination of Mayo Clinic-adjacent demographics, medical cannabis adoption, and limited recreational competition creates an exceptional first-mover opportunity.
                  </p>
                </div>
              </div>

              {/* Image Carousel (Right Side) */}
              <div className="relative h-96 lg:h-auto overflow-hidden border-l border-slate-700/50 order-1 lg:order-2 group">
                <img 
                  src={rochesterImages[rochesterImageIndex].src}
                  alt={rochesterImages[rochesterImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* Carousel Navigation */}
                <button
                  onClick={prevRochesterImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextRochesterImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {rochesterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setRochesterImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === rochesterImageIndex 
                          ? 'bg-emerald-400 w-6' 
                          : 'bg-slate-500 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Synterra Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner With <span className="text-emerald-400">Synterra?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our experience translates directly into landlord benefits: proven reliability, regulatory expertise, and premium lease terms that traditional tenants can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Advantage 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                  <Briefcase className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">We Deliver</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                With multi-state operations under our belt, we've proven we can navigate licensing, secure financing, and build out locations on schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">Licensed in MN and CA</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">30,000+ sq ft operational</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">Track record of follow-through</span>
                </li>
              </ul>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">We Protect You</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our lease agreements include SNDA protection and are structured by attorneys who understand cannabis real estate inside and out.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">SNDA provisions included</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">Regulatory compliance expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">Professional insurance coverage</span>
                </li>
              </ul>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                  <TrendingUp className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">We Pay Premium</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Cannabis retail generates exceptional revenue per square foot, allowing us to pay 1.5x market rate—rates traditional retailers simply can't afford.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">1.5x market rate leases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">$10K upfront, risk-free</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span className="text-slate-400">Zero landlord obligation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Bridge to Contact */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 lg:p-12 border border-emerald-500/20 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Location?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We're actively seeking premium retail locations in Northern Virginia. If you own or manage commercial property in high-traffic areas, let's discuss how our Lease Option model can benefit you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30"
            >
              <span>Get Your $10K Deposit</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Let's Collaborate */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Discuss Your Property</h2>
            <p className="text-xl text-slate-300">
              Own or manage commercial real estate in Northern Virginia? Let's explore how our Lease Option model can deliver $10,000 upfront and 1.5x market rate returns with zero risk to you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                  Property Address / Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="123 Main St, Arlington, VA or Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                  Tell Us About Your Property *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Property size, location details, current zoning, or any questions about our Lease Option model..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{formStatus === 'sending' ? 'Sending...' : 'Submit Property Inquiry'}</span>
                {formStatus !== 'sending' && <ArrowRight className="h-5 w-5" />}
              </button>

              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-center">
                  ✓ Message sent successfully! We'll be in touch within 24 hours.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                  ✗ Something went wrong. Please try again or email us directly at hello@synterra.group
                </div>
              )}
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              Prefer email? Reach us directly at{' '}
              <a href="mailto:hello@synterra.group" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                hello@synterra.group
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Synterra Group</span>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p className="mb-2">© 2025 Synterra Group. All rights reserved.</p>
              <p className="text-xs">
                Cannabis business operations are subject to state and local regulations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPortfolio;