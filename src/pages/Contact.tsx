/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const branches = [
    {
      id: 'branch-a',
      name: 'Branch A - Central Kampala',
      address: 'Plot 45, Kampala Road, Central Division, Kampala, Uganda',
      phone: '+256 700 000 001',
      email: 'central@paedmedical.com',
      hours: 'Mon-Fri: 8am-8pm, Sat: 9am-5pm',
      mapUrl: 'https://picsum.photos/seed/map-central/800/400'
    },
    {
      id: 'branch-b',
      name: 'Branch B - North Kampala',
      address: 'Plot 12, Gulu Highway, Kawempe, Kampala, Uganda',
      phone: '+256 700 000 002',
      email: 'north@paedmedical.com',
      hours: 'Mon-Fri: 8am-7pm, Sat: 9am-4pm',
      mapUrl: 'https://picsum.photos/seed/map-north/800/400'
    }
  ];

  return (
    <div className="bg-surface-light min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-secondary max-w-2xl mx-auto">
            We're here to help. Reach out to any of our branches or send us a message below.
          </p>
        </div>

        {/* Dual Branch Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="airbnb-card overflow-hidden flex flex-col"
            >
              <div className="h-64 relative bg-gray-200">
                <img 
                  src={branch.mapUrl} 
                  alt={`Map for ${branch.name}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand shadow-sm">
                  {branch.name.split(' - ')[1]}
                </div>
              </div>
              
              <div className="p-10 flex-grow">
                <h2 className="text-2xl font-bold mb-8">{branch.name}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-near-black mb-1">Physical Address</p>
                      <p className="text-gray-secondary leading-relaxed">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-near-black mb-1">Phone Number</p>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-brand hover:underline">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-near-black mb-1">Opening Hours</p>
                      <p className="text-gray-secondary">{branch.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 flex gap-4">
                  <button className="flex-1 airbnb-button-primary">Get Directions</button>
                  <button className="flex-1 px-6 py-3 rounded-xl font-bold border border-gray-300 hover:bg-gray-50 transition-colors">Call Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="airbnb-card p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-near-black ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-near-black ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-near-black ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all appearance-none bg-white">
                  <option>General Inquiry</option>
                  <option>Appointment Request</option>
                  <option>Medical Records</option>
                  <option>Billing Question</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-near-black ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center mt-4">
                <button className="airbnb-button-primary px-12 py-4 flex items-center gap-3 text-lg">
                  <Send size={20} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
