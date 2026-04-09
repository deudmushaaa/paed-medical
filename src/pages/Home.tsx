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
                src="https://picsum.photos/seed/doctor-consultant/800/1000" 
                alt="Senior Consultant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card py-6">
                <p className="font-bold text-xl mb-1">Dr. Sarah Namukasa</p>
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
            <h2 className="text-3xl font-bold mb-4">Visit our Kampala Branch</h2>
            <p className="text-gray-secondary">Centrally located for your convenience.</p>
          </div>
          
          <div className="airbnb-card overflow-hidden h-[450px] relative">
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-brand mx-auto mb-4" />
                <p className="text-near-black font-bold text-xl mb-2">Interactive Map Placeholder</p>
                <p className="text-gray-secondary">Plot 45, Kampala Road, Kampala, Uganda</p>
              </div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-8 left-8 max-w-xs glass-card !bg-near-black/80 text-white p-6 shadow-2xl hidden md:block">
              <h4 className="font-bold mb-4">Opening Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mon - Fri</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-brand">Emergency Only</span>
                </div>
              </div>
              <a href="tel:+256700000001" className="mt-6 flex items-center justify-center gap-2 bg-brand text-white py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors">
                <Phone size={16} /> Call Branch A
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
