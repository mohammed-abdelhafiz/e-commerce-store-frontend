import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { EmptyCategoryProducts } from "./EmptyCategoryProducts";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { CategoryProductsError } from "./CategoryProductsError";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
import { ChevronsRight } from "lucide-react";

interface ProductsGridProps {
  categoryName: string;
}

export const ProductsGrid = ({ categoryName }: ProductsGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const { data, isLoading, isError, refetch } = useGetProductsByCategory(
    categoryName,
    currentPage,
    limit
  );

  if (isLoading) return <ProductsSkeleton />;

  if (isError) {
    return <CategoryProductsError refetch={refetch} />;
  }

  const products = data?.products || [];
  const pagination = data?.pagination;
  const totalPages = pagination?.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={currentPage === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={currentPage === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Always show last page
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <div className="col-span-full">
            <EmptyCategoryProducts />
          </div>
        ) : (
          products.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pt-8 border-t border-border/40">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {renderPageNumbers()}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {totalPages > 5 && currentPage !== totalPages && (
                <PaginationItem>
                  <PaginationLink
                    size="icon"
                    onClick={() => handlePageChange(totalPages)}
                    className="cursor-pointer"
                    title="Last Page"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};


