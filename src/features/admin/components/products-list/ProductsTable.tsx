import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Product } from "@/features/products/types";
import { ProductActions } from "./ProductActions";
import { Button } from "@/shared/components/ui/button";

interface ProductsTableProps {
  products: Product[];
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export function ProductsTable({
  products,
  page,
  setPage,
  hasNextPage,
  isFetchingNextPage,
}: ProductsTableProps) {
  if (products.length === 0 && page > 1) {
    setPage(page - 1);
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>IsFeatured</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.isFeatured ? "Yes" : "No"}</TableCell>
            <TableCell className="text-right">
              <ProductActions product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="font-medium italic">Page {page}</TableCell>
          <TableCell colSpan={4} className="text-right">
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                PREVIOUS
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage ? "LOADING..." : "NEXT"}
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
