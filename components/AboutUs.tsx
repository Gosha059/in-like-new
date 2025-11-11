import { Shield, Award, Recycle, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Rigorous testing and certification',
  },
  {
    icon: Award,
    title: '12‑Month Warranty',
    description: 'Comprehensive coverage included',
  },
  {
    icon: Recycle,
    title: 'Eco‑Friendly',
    description: 'Reduce e‑waste, help the planet',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: '24/7 support and 30‑day returns',
  },
];

export function AboutUs() {
  return (
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">Why In‑like‑new</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're making premium technology accessible to everyone while 
            reducing e‑waste and promoting sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FBFBFD] rounded-3xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl mb-6 tracking-tight">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In‑like‑new was founded on a simple belief: everyone deserves access to 
              premium technology without the premium price tag. Since 2020, we've helped 
              over 50,000 customers discover the value of certified refurbished devices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every device is meticulously inspected by our expert technicians. We test 
              every component, replace what's needed, and certify that it meets our 
              exacting standards. The result? Technology that looks, feels, and performs 
              like new.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-3 tracking-tight">50,000+</div>
            <div className="text-sm text-gray-500">Devices sold</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3 tracking-tight">99.2%</div>
            <div className="text-sm text-gray-500">Satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3 tracking-tight">30 days</div>
            <div className="text-sm text-gray-500">Return policy</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3 tracking-tight">5 years</div>
            <div className="text-sm text-gray-500">In business</div>
          </div>
        </div>
      </div>
    </div>
  );
}
