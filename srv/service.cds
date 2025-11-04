using { sap.cap.navigation as db } from '../db/schema';

service OrdersService @(path: '/orders') {
    @odata.draft.enabled
    entity Orders as projection on db.Orders;
    entity Customers as projection on db.Customers;
}

service ProductsService @(path: '/products') {
    @odata.draft.enabled
    entity Products as projection on db.Products;
}

service CustomersService @(path: '/customers') {
    @odata.draft.enabled
    entity Customers as projection on db.Customers;
}
