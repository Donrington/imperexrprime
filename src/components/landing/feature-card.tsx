import { Card, CardContent } from '@/components/ui/card';

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-2 border-transparent bg-card/50 transition-all hover:border-primary/30 flex flex-col">
      <CardContent className="p-6 text-center flex-grow flex flex-col items-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
}
