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
      name: 'Branch A - Kyebando, Kampala',
      address: 'Kyebando, Kampala, Uganda',
      phone: '+256 703 919 679',
      email: 'kyebando@paedmedical.com',
      hours: 'Mon-Fri: 8am-8pm, Sat: 9am-5pm',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0663810175242!2d32.58220101008547!3d0.3595152639579414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba5f87f75835%3A0xfccefba6a41211d2!2sPaed%20Medical%20Center!5e1!3m2!1sen!2sug!4v1775723793931!5m2!1sen!2sug'
    },
    {
      id: 'branch-b',
      name: 'Branch B - Wakiso Branch',
      address: 'Wakiso, Uganda',
      phone: '+256 707 061 441',
      email: 'wakiso@paedmedical.com',
      hours: 'Mon-Fri: 8am-7pm, Sat: 9am-4pm',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.045917594615!2d32.47363957453354!3d0.4074794638809245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177daf7432c5b0f5%3A0x94b190293fa80062!2sPAED%20MEDICAL%20CENTRE%2C%20WAKISO%20BRANCH!5e1!3m2!1sen!2sug!4v1775726153791!5m2!1sen!2sug'
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
                {branch.embedUrl ? (
                  <iframe 
                    src={branch.embedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <MapPin size={48} className="text-brand/20" />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand shadow-sm">
                  {branch.name.includes(' - ') ? branch.name.split(' - ')[1] : branch.name.split(' - ')[0]}
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
