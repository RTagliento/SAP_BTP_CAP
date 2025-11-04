sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("launchpad.mainView.controller", {

        onInit: function () {
            // Definisce i dati delle tile
            var oData = {
                tileCount: 3,
                tiles: [
                    {
                        icon: "sap-icon://sales-order",
                        title: "Gestione Ordini",
                        info: "Orders",
                        infoState: "Success",
                        number: "12",
                        numberUnit: "Ordini Attivi",
                        targetUrl: "/orders/webapp/index.html"
                    },
                    {
                        icon: "sap-icon://product",
                        title: "Catalogo Prodotti",
                        info: "Products",
                        infoState: "Warning",
                        number: "156",
                        numberUnit: "Prodotti",
                        targetUrl: "/products/webapp/index.html"
                    },
                    {
                        icon: "sap-icon://customer",
                        title: "Gestione Clienti",
                        info: "Customers",
                        infoState: "Error",
                        number: "89",
                        numberUnit: "Clienti",
                        targetUrl: "/customers/webapp/index.html"
                    }
                ]
            };

            // Crea e assegna il modello JSON
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // Opzionale: carica statistiche reali dai servizi
            this._loadStatistics();
        },

        onTilePress: function (oEvent) {
            // Ottiene il contesto del binding per la tile premuta
            var oBindingContext = oEvent.getSource().getBindingContext();
            var oTileData = oBindingContext.getObject();

            // Naviga all'URL della tile
            MessageToast.show("Apertura " + oTileData.title + "...");

            // Naviga all'applicazione
            window.location.href = oTileData.targetUrl;
        },

        onRefresh: function () {
            MessageToast.show("Aggiornamento launchpad...");
            this._loadStatistics();
        },

        _loadStatistics: function () {
            // Qui puoi implementare chiamate OData per ottenere statistiche reali
            // Esempio: numero di ordini, prodotti, clienti dal database

            // Per ora usa i dati statici definiti in onInit
            // In futuro, puoi fare chiamate come:
            /*
            var oModel = this.getView().getModel();

            // Chiamata per contare ordini
            $.ajax({
                url: "/orders/Orders/$count",
                success: function(data) {
                    var aTiles = oModel.getProperty("/tiles");
                    aTiles[0].number = data.toString();
                    oModel.setProperty("/tiles", aTiles);
                }
            });
            */
        }
    });
});
