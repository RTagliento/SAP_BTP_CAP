namespace sap.cap.navigation;

using { cuid, managed } from '@sap/cds/common';

entity Orders : cuid, managed {
    orderNumber  : String(10);
    orderDate    : Date;
    customer     : Association to Customers;
    totalAmount  : Decimal(10,2);
    status       : String(20);
    description  : String(255);
}

entity Products : cuid, managed {
    productCode  : String(10);
    productName  : String(100);
    category     : String(50);
    price        : Decimal(10,2);
    stock        : Integer;
    description  : String(255);
}

entity Customers : cuid, managed {
    customerCode : String(10);
    firstName    : String(50);
    lastName     : String(50);
    email        : String(100);
    phone        : String(20);
    city         : String(50);
    country      : String(50);
}
