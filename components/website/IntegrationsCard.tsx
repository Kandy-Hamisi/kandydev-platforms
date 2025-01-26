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

type IntegrationCardProps = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

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
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        {Icon && (
          <div className="bg-blue-50 p-3 rounded-full">
            <Icon className="text-blue-600" size={24} />
          </div>
        )}
        <CardTitle className="m-0">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
export default IntegrationsCard;
