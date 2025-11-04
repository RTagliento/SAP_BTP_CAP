using ProductsService as service from '../../srv/service';

annotate service.Products with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Codice Prodotto',
            Value : productCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Nome Prodotto',
            Value : productName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Categoria',
            Value : category,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Prezzo',
            Value : price,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Giacenza',
            Value : stock,
        },
    ],
    UI.SelectionFields : [
        productCode,
        productName,
        category,
    ],
    UI.HeaderInfo : {
        TypeName : 'Prodotto',
        TypeNamePlural : 'Prodotti',
        Title : {
            $Type : 'UI.DataField',
            Value : productName,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : productCode,
        },
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'ProductInfo',
            Label : 'Informazioni Prodotto',
            Target : '@UI.FieldGroup#ProductInfo',
        },
    ],
    UI.FieldGroup #ProductInfo : {
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Codice Prodotto',
                Value : productCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Nome Prodotto',
                Value : productName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Categoria',
                Value : category,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Prezzo',
                Value : price,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Giacenza',
                Value : stock,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Descrizione',
                Value : description,
            },
        ],
    },
);
