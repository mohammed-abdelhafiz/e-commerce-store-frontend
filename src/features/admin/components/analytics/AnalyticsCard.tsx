import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export const AnalyticsCard = ({ title, value, icon }: AnalyticsCardProps) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
        <div className={`p-1 rounded-lg text-primary bg-primary/5`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-lg text-primary font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
};