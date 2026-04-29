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
  return (
    <Card className="overflow-hidden shadow-sm w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Order #{order._id}</CardTitle>
        <Badge variant="default">{order.status}</Badge>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="flex justify-between gap-4">
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-2">
              <p className="text-sm text-primary font-semibold">Order Date</p>
              <p className="text-sm">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-2">
              <p className="text-sm text-primary font-semibold">Total Amount</p>
              <p className="text-sm">${order.totalAmount.toFixed(2)}</p>
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-2">
              <p className="text-sm text-primary font-semibold">
                Payment Method
              </p>
              <p className="text-sm">Card</p>
            </CardContent>
          </Card>
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
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li
                    key={item.product._id}
                    className="text-sm flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                        {item.quantity}x
                      </span>
                      <span className="font-medium group-hover:text-primary transition-colors cursor-default">
                        {item.product.name}
                      </span>
                    </div>
                    <span className="text-muted-foreground font-mono text-xs">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-dashed border-muted-foreground/20 flex justify-between items-center">
                <span className="text-xs font-bold uppercase text-muted-foreground">
                  Total
                </span>
                <span className="text-sm font-bold text-primary">
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
