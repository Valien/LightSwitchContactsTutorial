/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowseContacts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseContacts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Contacts" type="msls.VisualCollection" elementType="msls.application.Contact">
        /// Gets the contacts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseContacts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseContacts", parameters);
    }

    function AddEditContact(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditContact screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Contact" type="msls.application.Contact">
        /// Gets or sets the contact for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditContact.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditContact", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowseContacts: $defineScreen(BrowseContacts, [
            {
                name: "Contacts", kind: "collection", elementType: lightSwitchApplication.Contact,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Contacts;
                }
            }
        ], [
        ]),

        AddEditContact: $defineScreen(AddEditContact, [
            { name: "Contact", kind: "local", type: lightSwitchApplication.Contact }
        ], [
        ]),

        showBrowseContacts: $defineShowScreen(function showBrowseContacts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseContacts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseContacts", parameters, options);
        }),

        showAddEditContact: $defineShowScreen(function showAddEditContact(Contact, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditContact screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditContact", parameters, options);
        })

    });

}(msls.application));
