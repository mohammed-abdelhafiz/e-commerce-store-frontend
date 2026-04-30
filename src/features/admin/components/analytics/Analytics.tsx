import { motion } from "motion/react";
import { AnalyticsSkeleton } from "./AnalyticsSkeleton";
import { AnalyticsCards } from "./AnalyticsCards";
import { SalesChart } from "./SalesChart";
import { useGetAnalytics } from "@/features/admin/hooks/useGetAnalytics";

export const Analytics = () => {
  const { data, isLoading, isError } = useGetAnalytics();

  if (isLoading) return <AnalyticsSkeleton />;
  if (isError || !data)
    return (
      <div className="text-destructive text-center py-10">
        Failed to load analytics right now, please try again later.
      </div>
    );

  const { totalUsers, totalProducts, totalSales, totalRevenue, recentSalesData } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-4 space-y-6"
    >
      <AnalyticsCards
        totalRevenue={totalRevenue}
        totalSales={totalSales}
        totalProducts={totalProducts}
        totalUsers={totalUsers}
      />
      <SalesChart recentSalesData={recentSalesData} />
    </motion.div>
  );
};
