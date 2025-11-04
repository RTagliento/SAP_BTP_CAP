using CustomersService as service from '../../srv/service';

annotate service.Customers with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Codice Cliente',
            Value : customerCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Nome',
            Value : firstName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Cognome',
            Value : lastName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Email',
            Value : email,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Città',
            Value : city,
        },
    ],
    UI.SelectionFields : [
        customerCode,
        firstName,
        lastName,
        city,
    ],
    UI.HeaderInfo : {
        TypeName : 'Cliente',
        TypeNamePlural : 'Clienti',
        Title : {
            $Type : 'UI.DataField',
            Value : firstName,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : customerCode,
        },
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'CustomerInfo',
            Label : 'Informazioni Cliente',
            Target : '@UI.FieldGroup#CustomerInfo',
        },
    ],
    UI.FieldGroup #CustomerInfo : {
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Codice Cliente',
                Value : customerCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Nome',
                Value : firstName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Cognome',
                Value : lastName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Telefono',
                Value : phone,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Città',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Paese',
                Value : country,
            },
        ],
    },
);
