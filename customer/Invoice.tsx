"use client";
import React, { useState } from "react";

export default function Invoice2() {
  const [data, setData] = useState<any>();
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

  const product1 = new Product("Product 1", 10);
  const product2 = new Product("Product 2", 20);
  const product3 = new Product("Product 3", 15);
  const product4 = new Product("Product 4", 25);

  //
  const customer = new Customer("John Doe");
  //
  const invoice = new Invoice();
  invoice.addItem(product1, 2);
  invoice.addItem(product3, 3);
  invoice.addItem(product4, 1);
  //
  // console.log(invoice.generateInvoice(customer));
  return (
    <div>
      <h1>Enter your name</h1>
      <input
        type="text"
        className=" border-2 border-black"
        onChange={(value: any) => setData(value)}
      />
      <h1>{data}</h1>
    </div>
  );
}
