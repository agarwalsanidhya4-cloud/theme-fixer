import { ImageWithFallback } from '../components/storefront/ImageWithFallback';
import { Award, Users, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">Our Story</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Born from a love of heritage craftsmanship and modern exclusivity.</p>
        </div>

        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-primary/30">
          <ImageWithFallback src="https://images.unsplash.com/photo-1610030469971-e0d3b7b5e8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" alt="12AM ETHNIC craftsmanship" className="w-full h-[400px] md:h-[500px] object-cover" />
        </div>

        <div className="max-w-3xl mx-auto mb-16 space-y-6 text-gray-300 leading-relaxed">
          <p className="text-xl"><span className="text-primary font-semibold">12AM ETHNIC</span> was born from a simple frustration: in a world of mass production, true exclusivity had become a forgotten luxury.</p>
          <p>We asked ourselves: What if each piece of ethnic wear was truly special? What if owning a lehenga or saree meant owning something that only a handful of people in the world could have?</p>
          <p>Our founder, raised in Surat—the textile capital of India—grew up watching master artisans pour their souls into creating breathtaking designs, only to see them mass-produced and diluted. That needed to change.</p>
          <p>So we created the <span className="text-primary font-semibold">Daily Drop</span> model: one exclusive design, released at midnight, available until the limited fabric runs out. No restocks. No reproductions. Just pure, unadulterated exclusivity.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, label: 'Master Artisans', value: '50+' },
            { icon: Sparkles, label: 'Hours Per Piece', value: '240+' },
            { icon: MapPin, label: 'Handcrafted in Surat', value: '100%' },
            { icon: Users, label: 'Happy Customers', value: '2,000+' },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2 font-['Playfair_Display']">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-black/40 border border-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-['Playfair_Display']">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Exclusivity', desc: "We believe in true scarcity. When we say limited, we mean it. No second chances." },
              { title: 'Craftsmanship', desc: "Every piece is touched by master artisans who've spent decades perfecting their craft." },
              { title: 'Heritage', desc: 'We honor traditional techniques while creating designs for the modern woman.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-xl font-bold text-primary mb-3 font-['Playfair_Display']">{v.title}</h3>
                <p className="text-gray-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
