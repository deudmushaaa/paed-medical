/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hospital-interior/1920/1080" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl glass-card"
          >
            <span className="inline-block px-3 py-1 bg-brand/20 text-brand-light text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand/30">
              Welcome to Paed Medical
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Expert Pediatric & Specialized Care in the Heart of Kampala.
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
              Compassionate healthcare delivered by leading specialists. We prioritize your family's well-being with state-of-the-art facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="airbnb-button-primary">
                Book Appointment
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-lg font-medium border border-white/30 hover:bg-white/10 transition-all">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Top Services</h2>
              <p className="text-gray-secondary max-w-md">Comprehensive medical solutions tailored for children and adults.</p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-brand font-semibold hover:underline group">
              View All Services <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Pediatrics', 
                desc: 'Specialized care for infants, children, and adolescents led by our Senior Consultant.',
                icon: <Stethoscope className="text-brand" size={32} />
              },
              { 
                title: 'Dental Clinic', 
                desc: 'From general checkups to orthodontics, we ensure your smile stays bright and healthy.',
                icon: <Stethoscope className="text-brand" size={32} />
              },
              { 
                title: 'General Medicine', 
                desc: 'Expert diagnosis and treatment for a wide range of adult medical conditions.',
                icon: <Stethoscope className="text-brand" size={32} />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="airbnb-card p-8 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-secondary leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <Link to="/services" className="text-sm font-bold text-near-black hover:text-brand transition-colors">
                  Learn more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - Split Screen */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Dr. Mugalu Jamil" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card py-6">
                <p className="font-bold text-xl mb-1">Dr. Mugalu Jamil</p>
                <p className="text-sm text-gray-300">Senior Consultant Pediatrician & Founder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Dedicated to Pediatric Excellence Since 2010.</h2>
              <p className="text-gray-secondary text-lg leading-relaxed mb-6">
                Paed Medical Center was founded with a single mission: to provide world-class pediatric care that is accessible to families in Kampala. 
              </p>
              <p className="text-gray-secondary text-lg leading-relaxed mb-10">
                Over the past decade, we have grown from a small clinic into a multi-specialty center, but our core values of compassion, integrity, and clinical excellence remain unchanged.
              </p>
              <Link to="/about" className="airbnb-button-primary inline-block">
                Read Full Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Visit Our Branches</h2>
            <p className="text-gray-secondary">Conveniently located to serve you better.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kyebando Branch */}
            <div className="airbnb-card overflow-hidden h-[450px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0663810175242!2d32.58220101008547!3d0.3595152639579414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba5f87f75835%3A0xfccefba6a41211d2!2sPaed%20Medical%20Center!5e1!3m2!1sen!2sug!4v1775723793931!5m2!1sen!2sug" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paed Medical Center Kyebando Branch"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 right-6 glass-card !bg-near-black/80 text-white p-5 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">Kyebando Branch</h4>
                    <p className="text-xs text-gray-400">Kampala, Uganda</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+256703919679" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors" title="Call +256 703 919 679">
                      <Phone size={18} />
                    </a>
                    <a href="tel:0394896096" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors" title="Call 039 4896096">
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Daily Hours</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-brand-light font-bold">
                    <span>Emergencies</span>
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wakiso Branch */}
            <div className="airbnb-card overflow-hidden h-[450px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.045917594615!2d32.47363957453354!3d0.4074794638809245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177daf7432c5b0f5%3A0x94b190293fa80062!2sPAED%20MEDICAL%20CENTRE%2C%20WAKISO%20BRANCH!5e1!3m2!1sen!2sug!4v1775726153791!5m2!1sen!2sug" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paed Medical Center Wakiso Branch"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 right-6 glass-card !bg-near-black/80 text-white p-5 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">Wakiso Branch</h4>
                    <p className="text-xs text-gray-400">Wakiso, Uganda</p>
                  </div>
                  <a href="tel:+256707061441" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                    <Phone size={18} />
                  </a>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Daily Hours</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-brand-light font-bold">
                    <span>Emergencies</span>
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
