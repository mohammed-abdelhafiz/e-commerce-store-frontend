import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Order } from "@/features/orders/types";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";

interface OrdersTableProps {
  orders: Order[];
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export function OrdersTable({
  orders,
  page,
  setPage,
  hasNextPage,
  isFetchingNextPage,
}: OrdersTableProps) {
  if (orders.length === 0 && page > 1) {
    setPage(page - 1);
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20";
      case "shipped":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20";
      case "delivered":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/20";
    }
  };

  return (
    <div className="rounded-md border border-border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Order ID</TableHead>
            <TableHead className="font-semibold">Customer</TableHead>
            <TableHead className="font-semibold">Shipping</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Total</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-mono text-xs text-muted-foreground uppercase">
                #{order._id.slice(-8)}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{order.user.name}</span>
                  <span className="text-xs text-muted-foreground">{order.user.email}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col text-xs text-muted-foreground max-w-[200px] truncate">
                  <span className="font-medium text-foreground truncate">{order.shippingAddress.address}</span>
                  <span>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {new Date(order.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell className="font-semibold text-primary">
                ${order.totalAmount.toFixed(2)}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={getStatusColor(order.status)}>
                  {order.status.toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
          {orders.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="bg-muted/50 border-t">
          <TableRow>
            <TableCell className="font-medium italic text-muted-foreground">
              Page {page}
            </TableCell>
            <TableCell colSpan={5} className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="h-8"
                >
                  PREVIOUS
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(page + 1)}
                  disabled={!hasNextPage || isFetchingNextPage}
                  className="h-8"
                >
                  {isFetchingNextPage ? "LOADING..." : "NEXT"}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
