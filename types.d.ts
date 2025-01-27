import * as LucideIcons from "lucide-react";

export type IntegrationCardProps = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};
