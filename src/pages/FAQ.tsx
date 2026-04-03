import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is the Daily Drop?', a: 'Every night at midnight, we release one exclusive ethnic wear piece. Each design is limited edition — once the fabric runs out, it\'s gone forever. No restocks, no reproductions.' },
  { q: 'How do I know when a new drop is coming?', a: 'Follow us on Instagram and join our WhatsApp list to get notified before each drop. You can also set an alarm for midnight IST!' },
  { q: 'Are these handmade?', a: 'Yes! Every piece is handcrafted by master artisans in Surat, Gujarat. Each piece takes 240+ hours of skilled craftsmanship including hand embroidery, zardozi work, and stone setting.' },
  { q: 'What if I miss a drop?', a: 'Unfortunately, once a drop sells out, it\'s gone forever. That\'s what makes each piece truly exclusive. We recommend setting up notifications so you never miss one.' },
  { q: 'Do you offer returns or exchanges?', a: 'Since each piece is made-to-order, we don\'t offer returns. However, we do offer size exchanges within 7 days of delivery if the piece doesn\'t fit.' },
  { q: 'How long does delivery take?', a: 'Each piece is made-to-order and takes 10-12 business days to craft and deliver. We ship across India with free shipping on all orders.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and popular wallets. All payments are 100% secure and prepaid.' },
  { q: 'Can I customize a piece?', a: 'Currently, we don\'t offer customization as each design is carefully curated. However, you can choose your size during checkout and we\'ll craft it to your measurements.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">FAQ</h1>
          <p className="text-gray-300 text-lg">Everything you need to know about 12AM ETHNIC.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
