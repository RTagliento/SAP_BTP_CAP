sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("products.mainView.controller", {

        onInit: function () {
            // Inizializza il modello OData
            var oModel = new sap.ui.model.odata.v4.ODataModel({
                serviceUrl: "/products/",
                synchronizationMode: "None",
                autoExpandSelect: true,
                operationMode: "Server"
            });

            this.getView().setModel(oModel);

            // Carica i dati
            this._loadData();
        },

        _loadData: function () {
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");

            if (oBinding) {
                oBinding.refresh();
            }
        },

        onRefresh: function () {
            MessageToast.show("Aggiornamento dati in corso...");
            this._loadData();
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");

            if (!oBinding) {
                return;
            }

            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("productCode", FilterOperator.Contains, sQuery),
                        new Filter("productName", FilterOperator.Contains, sQuery),
                        new Filter("category", FilterOperator.Contains, sQuery),
                        new Filter("description", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }

            oBinding.filter(aFilters);
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();

            if (oContext) {
                var oData = oContext.getObject();
                MessageBox.information(
                    "Dettagli Prodotto:\n\n" +
                    "Codice: " + oData.productCode + "\n" +
                    "Nome: " + oData.productName + "\n" +
                    "Categoria: " + oData.category + "\n" +
                    "Prezzo: € " + oData.price.toFixed(2) + "\n" +
                    "Giacenza: " + oData.stock + " unità\n" +
                    "Descrizione: " + oData.description,
                    {
                        title: oData.productName
                    }
                );
            }
        },

        formatStockState: function (iStock) {
            if (!iStock || iStock === 0) {
                return "Error";
            } else if (iStock < 50) {
                return "Warning";
            } else {
                return "Success";
            }
        },

        onNavBack: function () {
            window.history.back();
        }
    });
});
