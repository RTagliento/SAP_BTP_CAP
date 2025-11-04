sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("orders.mainView.controller", {

        onInit: function () {
            // Inizializza il modello OData
            var oModel = new sap.ui.model.odata.v4.ODataModel({
                serviceUrl: "/orders/",
                synchronizationMode: "None",
                autoExpandSelect: true,
                operationMode: "Server"
            });

            this.getView().setModel(oModel);

            // Carica i dati
            this._loadData();
        },

        _loadData: function () {
            var oTable = this.byId("ordersTable");
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
            var oTable = this.byId("ordersTable");
            var oBinding = oTable.getBinding("items");

            if (!oBinding) {
                return;
            }

            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("orderNumber", FilterOperator.Contains, sQuery),
                        new Filter("status", FilterOperator.Contains, sQuery),
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
                    "Dettagli Ordine:\n\n" +
                    "Numero: " + oData.orderNumber + "\n" +
                    "Data: " + new Date(oData.orderDate).toLocaleDateString('it-IT') + "\n" +
                    "Importo: € " + oData.totalAmount.toFixed(2) + "\n" +
                    "Stato: " + oData.status + "\n" +
                    "Descrizione: " + oData.description,
                    {
                        title: "Ordine " + oData.orderNumber
                    }
                );
            }
        },

        formatStatusState: function (sStatus) {
            if (!sStatus) {
                return "None";
            }

            switch (sStatus) {
                case "Completato":
                    return "Success";
                case "In Lavorazione":
                    return "Warning";
                case "Spedito":
                    return "Information";
                case "Annullato":
                    return "Error";
                default:
                    return "None";
            }
        },

        onNavBack: function () {
            window.history.back();
        }
    });
});
