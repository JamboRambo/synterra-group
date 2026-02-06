import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, TrendingUp, CheckCircle2, Phone, Mail, MapPin, ChevronDown, Lock, Leaf, Award, Users } from 'lucide-react';

const SynterraLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    message: ''
  });
  const [activeAccordion, setActiveAccordion] = useState(null);

  const [formStatus, setFormStatus] = useState('');

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
          phone: formData.phone,
          propertyAddress: formData.propertyAddress,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyAddress: '',
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes the 1.5x market rate sustainable?",
      answer: "Legal cannabis retail generates significantly higher revenue per square foot than traditional retail ($3,000-5,000/sq ft annually). This premium pricing reflects the specialized nature of the space, enhanced security requirements, and the competitive advantage of prime locations in emerging markets."
    },
    {
      question: "What happens if licensing doesn't go through?",
      answer: "You keep the $10,000 deposit with zero obligation. Our Conditional Lease Agreement is structured as a risk-free opportunity for landlords. If we don't secure licensing, funding, or decide not to proceed for any reason, you retain the deposit and can re-lease the property immediately."
    },
    {
      question: "What about property insurance and banking?",
      answer: "We work with specialized cannabis-friendly insurance carriers and maintain comprehensive liability coverage. Our track record in Minnesota and California demonstrates our ability to secure all necessary financial and insurance arrangements without impacting landlord relationships with traditional lenders."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">Synterra Group</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/about-portfolio" className="text-slate-300 hover:text-white transition-colors">About & Portfolio</Link>
              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Securing the Future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                  Virginia Retail
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Synterra Group bridges the gap between premium commercial real estate and the emerging legal cannabis market. 
                Partner with experienced operators from Minnesota and California who deliver 1.5x market rate returns with zero risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 text-center"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="#value-proposition"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">1.5x Market Rate</h3>
                      <p className="text-slate-300">Premium lease rates for prime locations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">$10,000 Risk-Free Deposit</h3>
                      <p className="text-slate-300">Yours to keep, zero obligation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Building2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">12-Month Option Period</h3>
                      <p className="text-slate-300">Flexible timeline for licensing approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cannabis-Native <span className="text-emerald-400">Investors</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven track record across Minnesota and California's competitive cannabis markets. We bring institutional-grade operations to Northern Virginia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 text-center">
              <Award className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Multi-State Operators</h3>
              <p className="text-slate-300">
                Successfully launched and operated cannabis facilities in Minnesota and California, navigating complex regulatory environments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 text-center">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Institutional Partners</h3>
              <p className="text-slate-300">
                Backed by experienced operators, legal counsel, and financial partners who understand the cannabis industry inside and out.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 text-center">
              <Building2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Real Estate First</h3>
              <p className="text-slate-300">
                Our model protects landlords first. Premium locations deserve premium tenants with proven track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The <span className="text-emerald-400">Synterra Advantage</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our Conditional Lease Agreement model puts landlords first while securing premium Northern Virginia locations for our retail operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 lg:p-12 border border-emerald-500/20">
              <h3 className="text-3xl font-bold text-white mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">We Pay $10,000 Upfront</h4>
                    <p className="text-slate-300">
                      Deposit is yours to keep regardless of outcome. Zero risk, 100% yours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-amber-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">12-Month Option Period</h4>
                    <p className="text-slate-300">
                      We secure licensing and funding. You have no obligations during this time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-blue-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Full Lease Activation</h4>
                    <p className="text-slate-300">
                      If licensed, we activate the lease at 1.5x market rate. If not, you keep the $10K free and clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-2xl">0%</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Landlord Risk</h4>
                <p className="text-slate-300">
                  Your property remains yours. No obligation. Keep the deposit even if we don't proceed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-400" />
                  <span className="text-amber-400 font-bold text-2xl">1.5x</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Market Rate Premium</h4>
                <p className="text-slate-300">
                  Industry-leading lease rates reflecting the value of prime cannabis retail locations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Lock className="h-8 w-8 text-blue-400" />
                  <span className="text-blue-400 font-bold text-2xl">100%</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Transparent Process</h4>
                <p className="text-slate-300">
                  Clear timelines, regular updates, and complete visibility into our licensing progress.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 lg:p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Common Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-white font-semibold text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-emerald-400 transition-transform ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Partner Together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Own or manage commercial real estate in Northern Virginia? Let's discuss how Synterra Group can bring premium returns to your property.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:939-428-1942" className="text-slate-300 hover:text-emerald-400 transition-colors">
                      939-428-1942
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@synterra.group" className="text-slate-300 hover:text-emerald-400 transition-colors">
                      hello@synterra.group
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Target Market</h3>
                    <p className="text-slate-300">Northern Virginia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <h3 className="text-white font-bold mb-2">Contact: James Park</h3>
                <p className="text-slate-300 text-sm">
                  Principal, Synterra Group
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="name"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-semibold text-slate-300 mb-2">
                    Property Address (Optional)
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="123 Main St, Vienna, VA"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your property..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </button>
                
                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-center">
                    ✓ Message sent successfully! We'll be in touch soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                    ✗ Something went wrong. Please try again or email us directly at hello@synterra.group
                  </div>
                )}
              </form>
            </div>
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

export default SynterraLandingPage;
