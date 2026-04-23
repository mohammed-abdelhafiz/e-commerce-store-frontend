import { CategoryPageContent } from "@/features/products/components/CategoryPageContent";
interface CategoryPageProps {
  params: Promise<{ categoryName: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  return <CategoryPageContent categoryName={categoryName} />;
}
