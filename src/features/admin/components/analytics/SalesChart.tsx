import { useMemo } from "react";
import { motion } from "motion/react";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

interface SalesChartProps {
  recentSalesData: {
    _id: string;
    sales: number;
    revenue: number;
  }[];
}

export const SalesChart = ({ recentSalesData }: SalesChartProps) => {
  const processedData = useMemo(() => {
    const dataMap = new Map(recentSalesData.map((item) => [item._id, item]));
    const result = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];

      if (dataMap.has(dateStr)) {
        result.push(dataMap.get(dateStr));
      } else {
        result.push({
          _id: dateStr,
          sales: 0,
          revenue: 0,
        });
      }
    }
    return result;
  }, [recentSalesData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Card className="border-0 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-primary">
            Sales & Revenue Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={processedData}
                margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground))"
                  opacity={0.1}
                />
                <XAxis
                  dataKey="_id"
                  stroke="currentColor"
                  className="text-muted-foreground"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                  tickFormatter={(str) => {
                    const date = new Date(str + "T00:00:00");
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#10B981"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#3B82F6"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--popover-foreground))",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    borderWidth: "1px",
                  }}
                  itemStyle={{ fontSize: "13px", padding: "2px 0" }}
                  labelStyle={{
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                  cursor={{
                    stroke: "hsl(var(--muted-foreground))",
                    strokeWidth: 1,
                    opacity: 0.2,
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "25px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="sales"
                  stroke="#10B981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSales)"
                  name="Orders"
                  animationDuration={1500}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  name="Revenue ($)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
