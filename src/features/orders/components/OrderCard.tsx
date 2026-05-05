import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Order } from "../types";
import { MapPin, User, Home, Hash } from "lucide-react";

interface OrderCardProps {
  order: Order;
}
export const OrderCard = ({ order }: OrderCardProps) => {
  const statusColors = {
    paid: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    shipped: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    delivered: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  };

  return (
    <Card className="overflow-hidden shadow-xl w-full max-w-3xl border-primary/10 bg-linear-to-b from-card to-card/50">
      <CardHeader className="flex flex-row items-center justify-between border-b border-primary/5 pb-4">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
            Order Reference
          </p>
          <CardTitle className="text-xl font-black text-primary flex items-center gap-2">
            <span className="opacity-50">#</span>
            {order._id.slice(-8).toUpperCase()}
          </CardTitle>
        </div>
        <Badge
          variant="outline"
          className={`capitalize px-4 py-1 rounded-full font-bold ${statusColors[order.status]}`}
        >
          {order.status}
        </Badge>
      </CardHeader>
      <CardContent className="p-8 pt-6 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 transition-colors hover:bg-primary/10">
            <p className="text-[10px] uppercase font-bold text-primary/60 tracking-wider mb-1">
              Date Placed
            </p>
            <p className="text-sm font-bold">
              {new Date(order.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 transition-colors hover:bg-primary/10">
            <p className="text-[10px] uppercase font-bold text-primary/60 tracking-wider mb-1">
              Total Investment
            </p>
            <p className="text-lg font-black text-primary">
              ${order.totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 transition-colors hover:bg-primary/10">
            <p className="text-[10px] uppercase font-bold text-primary/60 tracking-wider mb-1">
              Payment method
            </p>
            <p className="text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Secure Card
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                Shipping Address
              </h3>
            </div>
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 space-y-3">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 mt-0.5 text-primary/70" />
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-primary/50 tracking-tighter">
                    Recipient
                  </p>
                  <p className="text-sm font-medium">
                    {order.shippingAddress.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-4 h-4 mt-0.5 text-primary/70" />
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-primary/50 tracking-tighter">
                    Address
                  </p>
                  <p className="text-sm font-medium">
                    {order.shippingAddress.address}
                    {order.shippingAddress.apt && (
                      <span className="text-primary/70 ml-1">
                        (Apt: {order.shippingAddress.apt})
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                    {order.shippingAddress.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Hash className="w-5 h-5" />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                Order Items
              </h3>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <ul className="space-y-4">
                {order.items.map((item) => (
                  <li
                    key={item.product._id}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                          {item.quantity}x
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold group-hover:text-primary transition-colors cursor-default">
                          {item.product.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-tight">
                          Unit: ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-primary/80">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-dashed border-primary/20 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                    Final Amount
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Inclusive of all taxes
                  </p>
                </div>
                <span className="text-2xl font-black text-primary">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
