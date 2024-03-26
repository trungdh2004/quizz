import React from "react";
import { FaListUl } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    code: "123",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    code: "123",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    code: "123",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    code: "123",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    code: "123",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    code: "123",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    code: "123",
  },
];

const page = () => {
  return (
    <div className="w-full h-full p-4 lg:p-8 ">
      <div className="flex items-center">
        <FaListUl className="text-slate-500 mr-2" />
        <h1 className="text-base font-bold text-slate-500">Báo cáo</h1>
      </div>
      {/* //todo: bảng */}
      <div className="bg-white mt-4">
        <Table>
          <TableCaption className="border-t mt-0 py-4">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader>
            <TableRow className="cursor-pointer">
              <TableHead className="w-[100px]">Trạng thái</TableHead>
              <TableHead>Tên bài</TableHead>
              <TableHead>Tổng người tham gia</TableHead>
              <TableHead>Câu đúng</TableHead>
              <TableHead>Mã số</TableHead>
              <TableHead>Chia sẻ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice} className="cursor-pointer">
                <TableCell className="font-medium">
                  <div className="p-1 bg-green-200 rounded-sm flex items-center justify-center text-center">
                    {invoice.invoice}
                  </div>
                </TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>x</TableCell>
                <TableCell>{invoice.code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      page
    </div>
  );
};

export default page;
