import { SuccessCheckoutUI } from "@/features/payment/components/SuccessCheckoutUI";

interface SuccessCheckoutPageProps {
  searchParams: Promise<{ session_id: string }>;
}

export default async function SuccessCheckoutPage({
  searchParams,
}: SuccessCheckoutPageProps) {
  const { session_id } = await searchParams;
  return <SuccessCheckoutUI session_id={session_id} />;
}
