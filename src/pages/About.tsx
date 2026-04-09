/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Compassionate Care',
      desc: 'We treat every patient like family, ensuring a warm and supportive environment.',
      icon: <Heart className="text-brand" size={24} />
    },
    {
      title: 'Clinical Excellence',
      desc: 'Our team of specialists adheres to the highest international medical standards.',
      icon: <Award className="text-brand" size={24} />
    },
    {
      title: 'Integrity',
      desc: 'Transparency and honesty are at the core of our relationship with patients.',
      icon: <ShieldCheck className="text-brand" size={24} />
    },
    {
      title: 'Community Focused',
      desc: 'We are dedicated to improving the health of the Kampala community.',
      icon: <Users className="text-brand" size={24} />
    }
  ];

  const timeline = [
    { year: '2010', event: 'Paed Medical Center founded by Dr. Sarah Namukasa in central Kampala.' },
    { year: '2014', event: 'Expanded services to include Dental and General Medicine.' },
    { year: '2018', event: 'Opened our second branch in Kawempe to serve Northern Kampala.' },
    { year: '2022', event: 'Introduced specialized Neurology and Cardiology departments.' },
    { year: '2026', event: 'Celebrating 16 years of excellence in healthcare.' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-near-black text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              A Legacy of <span className="text-brand">Healing</span> and Hope.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded on the principles of compassion and excellence, Paed Medical Center has been a pillar of the Kampala healthcare system for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8">Message from our Founder</h2>
              <div className="space-y-6 text-lg text-gray-secondary leading-relaxed italic">
                <p>
                  "When I started Paed Medical Center, my goal was simple: to create a place where every child receives the same level of care I would want for my own children."
                </p>
                <p>
                  "Today, as we have grown into a multi-specialty center, that mission remains our guiding light. We are not just treating symptoms; we are caring for people."
                </p>
              </div>
              <div className="mt-10">
                <p className="font-bold text-xl text-near-black">Dr. Sarah Namukasa</p>
                <p className="text-brand font-medium">Senior Consultant Pediatrician & CEO</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="airbnb-card p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/founder/800/800" 
                  alt="Founder" 
                  className="rounded-2xl w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-secondary max-w-2xl mx-auto">The principles that guide every decision we make and every patient we treat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="airbnb-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-secondary text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-secondary">A timeline of growth and dedication to Kampala.</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block" />
            
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className={`airbnb-card p-8 w-full max-w-sm ${
                      i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <span className="text-brand font-bold text-2xl mb-2 block">{item.year}</span>
                      <p className="text-gray-secondary leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-12 h-12 bg-brand rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white shrink-0">
                    <Clock size={20} />
                  </div>
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
