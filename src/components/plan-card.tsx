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
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 sm:rounded-3xl sm:p-6 md:p-8">
      {/* Gradient Glow on Hover */}
      <div
        className={`absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30 sm:rounded-3xl`}
      />

      {/* Corner Gradient */}
      <div
        className={`absolute right-0 top-0 h-40 w-40 bg-gradient-to-br ${colors.bgGradient} opacity-50 blur-3xl sm:h-64 sm:w-64`}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col space-y-4 sm:space-y-5 md:space-y-6">
        {/* Header with Plan Name and Risk Badge */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {plan.name}{' '}
                <span className={`bg-gradient-to-r ${colors.badgeColor} bg-clip-text text-transparent`}>
                  Plan
                </span>
              </h3>
              <p className="text-xs text-neutral-400 sm:text-sm">{plan.description}</p>
            </div>
            {/* Risk Level Badge */}
            <div
              className={`flex w-fit items-center gap-1.5 rounded-full ${riskConfig.bgColor} px-2.5 py-1 backdrop-blur-sm sm:px-3 sm:py-1.5`}
            >
              <RiskIcon className={`h-3 w-3 ${riskConfig.color} sm:h-3.5 sm:w-3.5`} />
              <span className={`text-xs font-medium ${riskConfig.color}`}>
                {plan.riskLevel}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Daily ROI Section */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 sm:gap-2 sm:text-sm">
            <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Projected Daily ROI</span>
          </div>
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <p className={`text-3xl font-extrabold bg-gradient-to-r ${colors.badgeColor} bg-clip-text text-transparent sm:text-4xl md:text-5xl`}>
              {plan.dailyROI?.toFixed(1)}%
            </p>
            <p className="text-xs text-neutral-500 sm:text-sm">per day</p>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">{plan.explanation}</p>
        </div>

        {/* Minimum Deposit Section */}
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-3 backdrop-blur-sm sm:rounded-2xl sm:p-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 sm:gap-2 sm:text-sm">
            <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Minimum Deposit</span>
          </div>
          <p className="mt-1.5 text-2xl font-bold text-white sm:mt-2 sm:text-3xl">
            ${plan.minDeposit.toLocaleString()}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-grow space-y-2 sm:space-y-2.5 md:space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
              <div className={`mt-0.5 rounded-full ${colors.bgGradient} p-0.5 backdrop-blur-sm sm:p-1`}>
                <CheckCircle className={`h-3.5 w-3.5 ${colors.iconColor} sm:h-4 sm:w-4`} />
              </div>
              <span className="text-xs text-neutral-300 sm:text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className={`w-full rounded-lg bg-gradient-to-r ${colors.gradient} px-4 py-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:rounded-xl sm:px-5 sm:py-6 sm:text-base`}
          asChild
        >
          <Link href="/dashboard/wallet">
            <Rocket className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
            Select {plan.name} Plan
          </Link>
        </Button>
      </div>
    </div>
  );
}
