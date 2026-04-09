/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Brain, 
  Bone, 
  Eye, 
  Activity,
  ChevronRight
} from 'lucide-react';

const SERVICES = [
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    priority: true,
    icon: <Baby size={32} />,
    description: 'Our flagship service providing specialized care for infants, children, and adolescents.',
    details: 'Consultations with our Senior Consultant are available daily. We focus on preventive care, immunizations, and chronic condition management.',
    subServices: ['Newborn Care', 'Immunizations', 'Growth Monitoring', 'Pediatric Surgery Referral']
  },
  {
    id: 'dental',
    title: 'Dental Clinic',
    icon: <Stethoscope size={32} />,
    description: 'Comprehensive oral health care for the whole family in a comfortable environment.',
    details: 'Our dental team uses the latest technology to ensure painless and effective treatments.',
    subServices: [
      'General Checkups', 
      'Orthodontics', 
      'Scaling & Polishing', 
      'Teeth Whitening', 
      'Pediatric Dentistry'
    ]
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    icon: <HeartPulse size={32} />,
    description: 'Expert heart care focusing on prevention, diagnosis, and treatment of cardiovascular diseases.',
    details: 'Equipped with modern ECG and diagnostic tools to monitor heart health effectively.',
    subServices: ['ECG Testing', 'Hypertension Management', 'Heart Failure Care', 'Cardiac Screening']
  },
  {
    id: 'neurology',
    title: 'Neurology',
    icon: <Brain size={32} />,
    description: 'Specialized diagnosis and management of disorders of the nervous system.',
    details: 'Our neurologists treat conditions ranging from headaches to complex neurological disorders.',
    subServices: ['Epilepsy Management', 'Stroke Recovery', 'Migraine Treatment', 'Nerve Studies']
  },
  {
    id: 'general',
    title: 'General Medicine',
    icon: <Activity size={32} />,
    description: 'Primary healthcare for adults, focusing on overall wellness and disease prevention.',
    details: 'Comprehensive health checkups and management of acute and chronic illnesses.',
    subServices: ['Annual Physicals', 'Diabetes Care', 'Infectious Disease', 'Wellness Programs']
  }
];

export default function Services() {
  return (
    <div className="bg-surface-light min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Clinical Services</h1>
          <p className="text-xl text-gray-secondary leading-relaxed">
            At Paed Medical Center, we offer a wide range of specialized medical services delivered by expert clinicians using state-of-the-art technology.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`airbnb-card overflow-hidden flex flex-col lg:flex-row ${
                service.priority ? 'border-2 border-brand/20' : ''
              }`}
            >
              <div className={`lg:w-1/3 p-10 flex flex-col items-start ${
                service.priority ? 'bg-brand/5' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-secondary leading-relaxed">
                  {service.description}
                </p>
                {service.priority && (
                  <div className="mt-6 px-4 py-2 bg-brand text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Priority Service
                  </div>
                )}
              </div>
              
              <div className="lg:w-2/3 p-10 bg-white border-l border-gray-100">
                <h3 className="text-lg font-bold mb-6">Service Overview</h3>
                <p className="text-gray-secondary leading-relaxed mb-8">
                  {service.details}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-surface-light border border-gray-100 group hover:border-brand/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span className="text-sm font-medium text-near-black">{sub}</span>
                      <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-brand transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 airbnb-card bg-brand p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a specialized consultation?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            Our specialists are ready to help you. Book an appointment today and experience the highest standard of medical care in Kampala.
          </p>
          <button className="bg-white text-brand px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-light transition-all active:scale-95 shadow-xl">
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
}
