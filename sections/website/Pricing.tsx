import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { pricingData } from "@/constants";

const Pricing = () => {
  return (
    <section className="relative w-full max-container mx-auto padding">
      <h1 className="wide:text-4xl sm:text-3xl text-xl green-text-gradient font-bold text-center mb-6 text-purple-900">
        Do more with Startup Framework
      </h1>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              <TableHead className="text-center">
                <div className="font-bold mb-2">Basic Plan</div>
                <div className="text-sm text-gray-500">
                  All the basic for starting a new business
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="font-bold mb-2">Pro Plan</div>
                <div className="text-sm text-gray-500">
                  Everything you need for a growing business
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="font-bold mb-2">Company Plan</div>
                <div className="text-sm text-gray-500">
                  Perfect for companies, agencies & teams
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="ring-1">
            {pricingData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className="text-center ring-1 ring-white">
                  {typeof row.basic === "boolean" ? (
                    row.basic ? (
                      <Check className="mx-auto text-teal-500" />
                    ) : (
                      <X className="mx-auto text-gray-300" />
                    )
                  ) : (
                    row.basic
                  )}
                </TableCell>
                <TableCell className="text-center ring-1 ring-white">
                  {typeof row.pro === "boolean" ? (
                    row.pro ? (
                      <Check className="mx-auto text-teal-500" />
                    ) : (
                      <X className="mx-auto text-gray-300" />
                    )
                  ) : (
                    row.pro
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {typeof row.company === "boolean" ? (
                    row.company ? (
                      <Check className="mx-auto text-teal-500" />
                    ) : (
                      <X className="mx-auto text-gray-300" />
                    )
                  ) : (
                    row.company
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              <TableCell className="text-center">
                <Button variant="outline" className="w-full">
                  Get Started for Free
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button className="w-full bg-teal-500 hover:bg-teal-600">
                  Get Started for Free
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="outline" className="w-full">
                  Get Started for Free
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
export default Pricing;
