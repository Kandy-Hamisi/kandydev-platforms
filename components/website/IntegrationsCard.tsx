"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { IntegrationCardProps } from "@/types";

const IntegrationsCard: React.FC<IntegrationCardProps> = ({
  icon,
  title,
  description,
}) => {
  const Icon = LucideIcons[icon] as React.ComponentType<{
    className?: string;
    size?: number;
  }>;

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col pb-2">
        {Icon && (
          <div className="bg-blue-50 p-3 self-start rounded-full mb-3">
            <Icon className="text-blue-600" size={24} />
          </div>
        )}
        <CardTitle className="m-0">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-xs leading-[25px] font-semibold">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
export default IntegrationsCard;
