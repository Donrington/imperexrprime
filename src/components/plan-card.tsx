import { Button } from '@/components/ui/button';
import { type Plan } from '@/lib/types';
import { CheckCircle, Rocket, TrendingUp, DollarSign, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const planGradients = {
  Bronze: {
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-400',
    badgeColor: 'from-amber-400 to-orange-400',
  },
  Silver: {
    gradient: 'from-slate-400 to-zinc-500',
    bgGradient: 'from-slate-400/10 to-zinc-500/10',
    iconColor: 'text-slate-300',
    badgeColor: 'from-slate-300 to-zinc-400',
  },
  Gold: {
    gradient: 'from-yellow-500 to-amber-500',
    bgGradient: 'from-yellow-500/10 to-amber-500/10',
    iconColor: 'text-yellow-400',
    badgeColor: 'from-yellow-400 to-amber-400',
  },
};

const riskLevelConfig = {
  Low: { icon: Shield, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
  Medium: { icon: TrendingUp, color: 'text-amber-400', bgColor: 'bg-amber-500/10' },
  High: { icon: Zap, color: 'text-red-400', bgColor: 'bg-red-500/10' },
};

export function PlanCard({ plan }: { plan: Plan }) {
  const features = [
    `Return of Investment: ${plan.returnOfInvestment}`,
    `Trade Commission: ${plan.tradeCommission}%`,
    plan.support,
    'Maintenance fee is applied',
  ];

  const colors = planGradients[plan.name as keyof typeof planGradients];
  const riskConfig = riskLevelConfig[plan.riskLevel as keyof typeof riskLevelConfig];
  const RiskIcon = riskConfig.icon;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
      {/* Gradient Glow on Hover */}
      <div
        className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30`}
      />

      {/* Corner Gradient */}
      <div
        className={`absolute right-0 top-0 h-64 w-64 bg-gradient-to-br ${colors.bgGradient} opacity-50 blur-3xl`}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col space-y-6">
        {/* Header with Plan Name and Risk Badge */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">
                {plan.name}{' '}
                <span className={`bg-gradient-to-r ${colors.badgeColor} bg-clip-text text-transparent`}>
                  Plan
                </span>
              </h3>
              <p className="text-sm text-neutral-400">{plan.description}</p>
            </div>
            {/* Risk Level Badge */}
            <div
              className={`flex items-center gap-1.5 rounded-full ${riskConfig.bgColor} px-3 py-1.5 backdrop-blur-sm`}
            >
              <RiskIcon className={`h-3.5 w-3.5 ${riskConfig.color}`} />
              <span className={`text-xs font-medium ${riskConfig.color}`}>
                {plan.riskLevel}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Daily ROI Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
            <TrendingUp className="h-4 w-4" />
            <span>Projected Daily ROI</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className={`text-5xl font-extrabold bg-gradient-to-r ${colors.badgeColor} bg-clip-text text-transparent`}>
              {plan.dailyROI?.toFixed(1)}%
            </p>
            <p className="text-sm text-neutral-500">per day</p>
          </div>
          <p className="text-xs text-neutral-500">{plan.explanation}</p>
        </div>

        {/* Minimum Deposit Section */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
            <DollarSign className="h-4 w-4" />
            <span>Minimum Deposit</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">
            ${plan.minDeposit.toLocaleString()}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-grow space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`mt-0.5 rounded-full ${colors.bgGradient} p-1 backdrop-blur-sm`}>
                <CheckCircle className={`h-4 w-4 ${colors.iconColor}`} />
              </div>
              <span className="text-sm text-neutral-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className={`w-full rounded-xl bg-gradient-to-r ${colors.gradient} px-6 py-6 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          asChild
        >
          <Link href="/dashboard/wallet">
            <Rocket className="mr-2 h-5 w-5" />
            Select {plan.name} Plan
          </Link>
        </Button>
      </div>
    </div>
  );
}
