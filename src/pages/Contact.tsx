import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Us', detail: 'support@12amethnic.com', sub: 'We respond within 24 hours' },
    { icon: Phone, title: 'Call Us', detail: '+91 98765 43210', sub: 'Mon-Sat, 10 AM - 6 PM IST' },
    { icon: MapPin, title: 'Visit Us', detail: '123 Textile Market Road\nSurat, Gujarat 395003\nIndia', sub: '' },
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">Get In Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Have a question about our drops? We're here to help.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{info.detail}</p>
                {info.sub && <p className="text-gray-500 text-xs mt-2">{info.sub}</p>}
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 font-['Playfair_Display']">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-foreground focus:border-primary focus:outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-foreground focus:border-primary focus:outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-foreground focus:border-primary focus:outline-none" placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-foreground focus:border-primary focus:outline-none resize-none" placeholder="Tell us more..." />
                </div>
                <button type="submit" className="bg-primary hover:bg-[hsl(var(--gold-light))] text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-3">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
