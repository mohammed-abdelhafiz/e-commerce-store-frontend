import { DollarSign, ShoppingBag, User, Package } from "lucide-react";
import { AnalyticsCard } from "./AnalyticsCard";

interface AnalyticsCardsProps {
  totalUsers: number;
  totalProducts: number;
  totalSales: number;
  totalRevenue: number;
}
export const AnalyticsCards = ({
  totalUsers,
  totalProducts,
  totalSales,
  totalRevenue,
}: AnalyticsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <AnalyticsCard
        title="Total Users"
        value={totalUsers.toString()}
        icon={<User className="h-4 w-4" />}
      />
      <AnalyticsCard
        title="Total Products"
        value={totalProducts.toString()}
        icon={<Package className="h-4 w-4" />}
      />
      <AnalyticsCard
        title="Total Orders"
        value={totalSales.toString()}
        icon={<ShoppingBag className="h-4 w-4" />}
      />
      <AnalyticsCard
        title="Total Revenue"
        value={totalRevenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        icon={<DollarSign className="h-4 w-4" />}
      />
    </div>
  );
};
