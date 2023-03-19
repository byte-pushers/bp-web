import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../shared/models/address";
import { Quote } from "../shared/models/quote";

@Injectable()
export class QuotesService {
  actualData = {
    status: "OK",
    data: [
      {
        id: "6052401f-34e5-4b09-bd3b-4de8aae7a970",
        description: "string",
        createdDate: null,
        updatedDate: null,
        contact: {
          id: "180d53f8-18e1-46ad-a24f-16d4813aa91b",
          firstName: "Aman",
          lastName: "Abrol",
          email: "aman@gmail.com",
          phone: {
            id: "d10b127f-1401-4b49-8aa3-bbca29e48336",
            number: "1234567890",
            type: "home",
          },
          address: {
            id: "de08f2a9-33a9-4ea4-9f74-599fb9389ff5",
            street: ["16241 N 30th Pl", "1200"],
            city: "phoenix",
            state: "AZ",
            zip: "85032",
            country: "USA",
            county: "genesee",
          },
        },
        company: {
          id: "393166cc-2339-46bb-ae0e-fa346f0633da",
          name: "Private LLP",
          type: "LLP",
          url: "https://www.google.com",
          budget: {
            id: "83a1e179-5bd2-4208-9763-4ee2b8ff3985",
            min: 15,
            max: 10,
            isMaxFinite: true,
          },
          timeline: {
            id: "29688b20-2ec7-4f72-a3e3-36ce3a88fbde",
            min: 434,
            max: 734,
            isMaxFinite: true,
          },
          isEstablished: false,
          establishedYear: 2012,
          foundation: "New Business",
        },
        projectPlatform: "Platform",
        projectType: "Type",
        disabled: false,
      },
      {
        id: "27880ee6-f540-4c8b-9754-e374d76109f9",
        description: "string",
        createdDate: null,
        updatedDate: null,
        contact: {
          id: "1a3ca2d9-dc8c-4ac0-89c4-76360735b7cb",
          firstName: "Aman",
          lastName: "Abrol",
          email: "aman@gmail.com",
          phone: {
            id: "130431fd-7da4-4b1a-977e-3a766e2e5afb",
            number: "1234567890",
            type: "home",
          },
          address: {
            id: "ab6251bd-3f7e-4630-8427-368dac0da724",
            street: ["16241 N 30th Pl", "1200"],
            city: "phoenix",
            state: "AZ",
            zip: "85032",
            country: "USA",
            county: "genesee",
          },
        },
        company: {
          id: "e4645fd8-5bd3-42fd-a4db-ce5dc79d6514",
          name: "Private LLP",
          type: "LLP",
          url: "https://www.google.com",
          budget: {
            id: "6b62d607-2409-4569-83b8-4c9b1c783710",
            min: 15,
            max: 10,
            isMaxFinite: true,
          },
          timeline: {
            id: "627fb491-2551-4e95-98cd-232715efcae5",
            min: 434,
            max: 734,
            isMaxFinite: true,
          },
          isEstablished: false,
          establishedYear: 2012,
          foundation: "New Business",
        },
        projectPlatform: "Platform",
        projectType: "Type",
        disabled: false,
      },
    ],
  };
  status: string[] = ["OUTOFSTOCK", "INSTOCK", "LOWSTOCK"];

  productNames: string[] = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
  ];

  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>("../assets/dummyData/quotes.json")
      .toPromise()
      .then((res) => <Quote[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getProducts() {
    return this.http
      .get<any>("../assets/dummyData/quotes.json")
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getProductsWithOrdersSmall() {
    return this.http
      .get<any>("../assets/dummyData/quotes.json")
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generatePrduct(): Product {
    const product: Product = {
      id: this.generateId(),
      name: this.generateName(),
      description: "Product Description",
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: "Product Category",
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating(),
    };

    product.image =
      product.name.toLocaleLowerCase().split(/[ ,]+/).join("-") + ".jpg";
    return product;
  }

  generateId() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }
}
