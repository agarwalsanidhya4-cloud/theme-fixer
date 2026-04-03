import { ShieldCheck, Sparkles, Lock } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    { icon: Sparkles, title: 'Handcrafted in Surat', description: 'Artisan quality' },
    { icon: Lock, title: '100% Prepaid Secure', description: 'Encrypted checkout' },
    { icon: ShieldCheck, title: 'Made-to-Order', description: 'Exclusive for you' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center gap-3 p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-primary/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <badge.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">{badge.title}</h4>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
