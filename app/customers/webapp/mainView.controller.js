sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("customers.mainView.controller", {

        onInit: function () {
            // Inizializza il modello OData
            var oModel = new sap.ui.model.odata.v4.ODataModel({
                serviceUrl: "/customers/",
                synchronizationMode: "None",
                autoExpandSelect: true,
                operationMode: "Server"
            });

            this.getView().setModel(oModel);

            // Carica i dati
            this._loadData();
        },

        _loadData: function () {
            var oTable = this.byId("customersTable");
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
            var oTable = this.byId("customersTable");
            var oBinding = oTable.getBinding("items");

            if (!oBinding) {
                return;
            }

            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("customerCode", FilterOperator.Contains, sQuery),
                        new Filter("firstName", FilterOperator.Contains, sQuery),
                        new Filter("lastName", FilterOperator.Contains, sQuery),
                        new Filter("email", FilterOperator.Contains, sQuery),
                        new Filter("city", FilterOperator.Contains, sQuery),
                        new Filter("country", FilterOperator.Contains, sQuery)
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
                    "Dettagli Cliente:\n\n" +
                    "Codice: " + oData.customerCode + "\n" +
                    "Nome: " + oData.firstName + " " + oData.lastName + "\n" +
                    "Email: " + oData.email + "\n" +
                    "Telefono: " + oData.phone + "\n" +
                    "Città: " + oData.city + "\n" +
                    "Paese: " + oData.country,
                    {
                        title: "Cliente " + oData.customerCode
                    }
                );
            }
        },

        onNavBack: function () {
            window.history.back();
        }
    });
});
