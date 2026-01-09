import React, { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // ==========================================
    // BACKEND INTEGRATION INSTRUCTIONS
    // ==========================================
    // To connect this form to a backend service:
    // 1. Replace the setTimeout below with a fetch() call.
    // 2. Example: 
    //    fetch('https://api.yourdomain.com/contact', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //      body: JSON.stringify(formState)
    //    })
    // 3. Or use a service like EmailJS or Formspree directly.
    // ==========================================

    // Simulating API call
    setTimeout(() => {
      console.log('Form Data Submitted:', formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
       {/* Background Glow */}
       <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Let's Build Something <span className="text-secondary">Impossible</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Ready to start a project? I'm currently available for freelance work and collaborations. 
          </p>
          
          <div className="space-y-4">
            <ContactCard 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                }
                label="Phone"
                value={CONTACT_PHONE}
                color="text-primary"
            />
             <ContactCard 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                }
                label="WhatsApp"
                value={CONTACT_WHATSAPP}
                color="text-green-400"
            />
             <ContactCard 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                }
                label="Email"
                value={CONTACT_EMAIL}
                color="text-secondary"
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl -z-10 rounded-3xl"></div>
            
            <div className="glass-card bg-bgDark/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col relative overflow-hidden">
                {status === 'success' ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bgDark/90 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                    </div>
                ) : null}

                <h3 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
                    <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-500 mb-2 tracking-wider">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder-gray-600"
                            placeholder="Cyber Samurai"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 mb-2 tracking-wider">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder-gray-600"
                            placeholder="samurai@city2077.com"
                        />
                    </div>
                    
                    <div className="flex-grow">
                        <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-500 mb-2 tracking-wider">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            required
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder-gray-600 h-32 resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`mt-2 w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all relative overflow-hidden group
                            ${status === 'submitting' ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(0,242,234,0.4)] text-bgDark'}
                        `}
                    >
                         {status === 'submitting' ? (
                             <span className="flex items-center justify-center gap-2">
                                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                 </svg>
                                 Sending...
                             </span>
                         ) : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard: React.FC<{ icon: React.ReactNode; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
        <div className={`p-3 rounded-lg bg-bgDark border border-white/5 ${color} group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
        <div className="ml-auto">
             <button className="text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-300 transition-colors">
                Copy
             </button>
        </div>
    </div>
);

export default Contact;