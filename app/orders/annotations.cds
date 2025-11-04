using OrdersService as service from '../../srv/service';

annotate service.Orders with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Numero Ordine',
            Value : orderNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Data Ordine',
            Value : orderDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Cliente',
            Value : customer.firstName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Importo Totale',
            Value : totalAmount,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Stato',
            Value : status,
        },
    ],
    UI.SelectionFields : [
        orderNumber,
        orderDate,
        status,
    ],
    UI.HeaderInfo : {
        TypeName : 'Ordine',
        TypeNamePlural : 'Ordini',
        Title : {
            $Type : 'UI.DataField',
            Value : orderNumber,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : description,
        },
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneralInfo',
            Label : 'Informazioni Generali',
            Target : '@UI.FieldGroup#GeneralInfo',
        },
    ],
    UI.FieldGroup #GeneralInfo : {
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Numero Ordine',
                Value : orderNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Data Ordine',
                Value : orderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Importo Totale',
                Value : totalAmount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Stato',
                Value : status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Descrizione',
                Value : description,
            },
        ],
    },
);
