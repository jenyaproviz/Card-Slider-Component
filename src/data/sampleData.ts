export interface CardProps {
  PaymentSystem: "Visa" | "MasterCard";
  FirstName: string;
  LastName: string;
  CardNumber: string;
  Role: string;
  Status: string;
  Logo: string;
}

export const sampleCards: CardProps[] = [
  {
    PaymentSystem: "Visa",
    FirstName: "John",
    LastName: "Doe",
    CardNumber: "1234567890123456",
    Role: "User",
    Status: "Blocked",
    Logo: "https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-713-1079544.png?f=webp&w=512",
  },
  {
    PaymentSystem: "MasterCard",
    FirstName: "Jane",
    LastName: "Smith",
    CardNumber: "6543210987654321",
    Role: "Admin",
    Status: "Inactive",
    Logo: "https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-713-1079544.png?f=webp&w=512",
  },
  {
    PaymentSystem: "Visa",
    FirstName: "Hulio",
    LastName: "Cruze",
    CardNumber: "1234567890125263",
    Role: "User",
    Status: "Freeze",
    Logo: "https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-713-1079544.png?f=webp&w=512",
  },
  {
    PaymentSystem: "MasterCard",
    FirstName: "Haim",
    LastName: "Noy",
    CardNumber: "6543210987658745",
    Role: "Employee",
    Status: "Active",
    Logo: "https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-713-1079544.png?f=webp&w=512",
  },
];
