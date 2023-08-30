"use client";
import React, { useState } from "react";

export default function Invoice2() {
  const [enteredCustomer, setEnteredCustomer] = useState<any>();
  const [product1num, setProduct1num] = useState<any>(0);
  const [product2num, setProduct2num] = useState<any>(0);
  const [product3num, setProduct3num] = useState<any>(0);
  const [product4num, setProduct4num] = useState<any>(0);
  class Product {
    constructor(public name: string, public price: number) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  class InvoiceItem {
    constructor(public product: Product, public quantity: number) {}

    calculateTotal(): number {
      return this.product.price * this.quantity;
    }
  }

  class Invoice {
    private items: InvoiceItem[] = [];

    addItem(product: Product, quantity: number): void {
      const item = new InvoiceItem(product, quantity);
      this.items.push(item);
    }

    calculateTotalAmount(): number {
      let total = 0;
      for (const item of this.items) {
        total += item.calculateTotal();
      }
      return total;
    }

    generateInvoice(customer: Customer): string {
      let invoiceString = `Invoice for ${customer.name}:\n`;
      for (const item of this.items) {
        invoiceString += `${item.product.name} (Qty: ${
          item.quantity
        }) - $${item.calculateTotal()}\n`;
      }
      invoiceString += `Total amount: $${this.calculateTotalAmount()}`;
      return invoiceString;
    }
  }

  const product1 = new Product("Mouse", 100);
  const product2 = new Product("Keyboard", 220);
  const product3 = new Product("Moniter", 150);
  const product4 = new Product("CPU", 250);

  //
  const customer = new Customer(`${enteredCustomer}`);
  //
  const invoice = new Invoice();
  invoice.addItem(product1, product1num);
  invoice.addItem(product2, product2num);
  invoice.addItem(product3, product3num);
  invoice.addItem(product4, product4num);
  //
  // console.log(invoice.generateInvoice(customer));
  return (
    <div className="p-20">
      <div className="flex gap-2 items-center">
        <h1 className="text-[20px]">Enter your name</h1>
        <input
          type="text"
          className=" border-2 border-black rounded-md pl-4 py-2"
          onChange={(e: any) => setEnteredCustomer(e.target.value)}
        />
      </div>

      {enteredCustomer && (
        <h1 className="font-bold text-2xl pt-3 ">Welcome {enteredCustomer}</h1>
      )}
      {enteredCustomer && (
        <div className="flex-col flex justify-end">
          <ul className="bg-blue-200 w-fit">
            <li className="flex p-3 mt-10 gap-10 items-center">
              <h1>{product1.name}</h1>
              <h1>$ {product1.price}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct1num(product1num - 1)}
                disabled={product1num <= 0}
              >
                Minus
              </button>
              <h1>{product1num}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct1num(product1num + 1)}
              >
                ADD
              </button>
              <h1>$ {product1.price * product1num}</h1>
            </li>
            <li className="flex p-3 mt-10 gap-10 items-center">
              <h1>{product2.name}</h1>
              <h1>$ {product2.price}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct2num(product2num - 1)}
                disabled={product2num <= 0}
              >
                Minus
              </button>
              <h1>{product2num}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct2num(product2num + 1)}
              >
                ADD
              </button>
              <h1>$ {product2.price * product2num}</h1>
            </li>
            <li className="flex p-3 mt-10 gap-10 items-center">
              <h1>{product3.name}</h1>
              <h1>$ {product3.price}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct3num(product3num - 1)}
                disabled={product3num <= 0}
              >
                Minus
              </button>
              <h1>{product3num}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct3num(product3num + 1)}
              >
                ADD
              </button>
              <h1>$ {product3.price * product3num}</h1>
            </li>
            <li className="flex p-3 mt-10 gap-10 items-center">
              <h1>{product4.name}</h1>
              <h1>$ {product4.price}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct4num(product4num - 1)}
                disabled={product4num <= 0}
              >
                Minus
              </button>
              <h1>{product4num}</h1>
              <button
                className="py-2 px-4 bg-red-200"
                onClick={() => setProduct4num(product4num + 1)}
              >
                ADD
              </button>

              <h1>$ {product4.price * product4num}</h1>
            </li>
          </ul>
          <div className="flex items-center mt-6 gap-10">
            <h1 className="text-2xl">total amount without Discount</h1>
            <h1 className=" font-bold text-2xl">
              $
              {product1.price * product1num +
                product2.price * product2num +
                product3.price * product3num +
                product4.price * product4num}
            </h1>
          </div>
          <div className="flex items-center mt-6 gap-10">
            <h1 className="text-2xl">Discount</h1>
            <h1 className=" font-bold text-2xl">5%</h1>
          </div>
          <div className="flex items-center mt-6 gap-10">
            <h1 className="text-2xl">total amount without Discount</h1>
            <h1 className=" font-bold text-2xl">
              $
              {((product1.price * product1num +
                product2.price * product2num +
                product3.price * product3num +
                product4.price * product4num) *
                95) /
                100}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
