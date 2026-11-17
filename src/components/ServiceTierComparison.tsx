import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

interface ServiceTierComparisonProps {
  direction?: 'export' | 'import';
}

export function ServiceTierComparison({ direction = 'export' }: ServiceTierComparisonProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companyConfig.serviceLevels.map((tier, idx) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-xl p-6 border transition-colors ${
              idx === 0
                ? 'bg-[#111111] text-white border-[#111111]'
                : 'bg-white text-[#111111] border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  idx === 0 ? 'text-[#D4AF37]' : 'text-[#B5121B]'
                }`}
              >
                0{idx + 1}. Service Level
              </span>
              <span
                className={`font-mono text-xs tabular-nums ${
                  idx === 0 ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                {tier.indicativeWindow}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold tracking-tight">{tier.name}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                idx === 0 ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {tier.summary}
            </p>

            <div
              className={`mt-5 pt-4 border-t text-xs ${
                idx === 0
                  ? 'border-neutral-800 text-neutral-300'
                  : 'border-neutral-100 text-neutral-600'
              }`}
            >
              <span className="font-semibold">Recommended for: </span>
              {tier.bestFor}
            </div>

            <div className="mt-5">
              <Link
                to={`/quote?direction=${direction}&tier=${tier.id}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  idx === 0
                    ? 'text-[#D4AF37] hover:text-white'
                    : 'text-[#B5121B] hover:text-[#111111]'
                }`}
              >
                <span>Request {tier.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
        {companyConfig.transitDisclaimer}
      </p>
    </div>
  );
}
