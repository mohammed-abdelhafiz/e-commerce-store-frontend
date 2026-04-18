"use client";
import { motion } from "motion/react";
import { PlusCircle, ShoppingBasket, BarChart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { CreateProductForm } from "./create-product-form/CreateProductForm";
import { ProductsList } from "./products-list/ProductsList";
import { Analytics } from "./analytics/Analytics";

const TABS = [
  {
    id: "create",
    label: "Create Product",
    icon: PlusCircle,
    view: <CreateProductForm />,
  },
  {
    id: "products",
    label: "Products",
    icon: ShoppingBasket,
    view: <ProductsList />,
  },
  { id: "analytics", label: "Analytics", icon: BarChart, view: <Analytics /> },
];

export const AdminPageContent = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-primary">
        Admin Dashboard
      </h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant={activeTab === tab.id ? "default" : "outline"}
            size="lg"
            className="w-32 font-semibold"
          >
            <tab.icon className="w-4 h-4 mr-0.5" />
            {tab.label}
          </Button>
        ))}
      </div>
      {TABS.find((tab) => tab.id === activeTab)?.view}
    </motion.div>
  );
};
