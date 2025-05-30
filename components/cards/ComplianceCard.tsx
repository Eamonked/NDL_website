import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DivideIcon as LucideIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComplianceCardProps {
  icon: LucideIcon;
  title: string;
  points: string[];
  className?: string;
}

export function ComplianceCard({ icon: Icon, title, points, className }: ComplianceCardProps) {
  return (
    <Card className={cn("border border-gray-200 transition-all hover:border-teal-200 hover:shadow-sm", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
            <Icon className="h-5 w-5 text-teal-600" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mt-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}