import { Clock, Sparkles, Package, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: Clock, title: 'Midnight Drop', desc: 'Every night at 12:00 AM IST, we reveal one exclusive ethnic wear piece. Set your alarm and be ready.' },
  { icon: Sparkles, title: 'Handcrafted Excellence', desc: 'Each piece is handcrafted by master artisans in Surat, taking 240+ hours of meticulous work.' },
  { icon: Package, title: 'Secure Your Piece', desc: 'Once you see the drop, secure it immediately. Limited fabric means limited pieces. When it\'s gone, it\'s gone forever.' },
  { icon: ShieldCheck, title: 'Made Just for You', desc: 'Your piece is crafted to order with your measurements. Delivered to your doorstep in 10-12 business days.' },
];

export default function HowItWorks() {
  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Our unique Daily Drop model ensures every piece you own is truly one-of-a-kind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all group">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg font-['Playfair_Display']">{index + 1}</div>
              <step.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-['Playfair_Display']">Ready for Tonight's Drop?</h2>
          <p className="text-gray-300 mb-8">Set your alarm for midnight and be among the first to secure an exclusive piece.</p>
          <a href="/" className="inline-block bg-primary hover:bg-[hsl(var(--gold-light))] text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">View Today's Drop</a>
        </div>
      </div>
    </div>
  );
}
