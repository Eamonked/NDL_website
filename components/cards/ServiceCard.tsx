import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <Card className={cn("border-2 border-gray-100 hover:border-teal-100 transition-all hover:shadow-md", className)}>
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-teal-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}