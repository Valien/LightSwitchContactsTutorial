/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.BrowseContacts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseContacts
        },
        ContactList: {
            _$class: msls.ContentItem,
            _$name: "ContactList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseContacts,
            data: lightSwitchApplication.BrowseContacts,
            value: lightSwitchApplication.BrowseContacts
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "ContactList",
            screen: lightSwitchApplication.BrowseContacts,
            data: lightSwitchApplication.BrowseContacts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseContacts,
                _$entry: {
                    elementType: lightSwitchApplication.Contact
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Contact",
            screen: lightSwitchApplication.BrowseContacts,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseContacts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseContacts, {
        /// <field>
        /// Called when a new BrowseContacts screen is created.
        /// <br/>created(msls.application.BrowseContacts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseContacts],
        /// <field>
        /// Called before changes on an active BrowseContacts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseContacts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseContacts],
        /// <field>
        /// Called after the ContactList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactList_postRender: [$element, function () { return new lightSwitchApplication.BrowseContacts().findContentItem("ContactList"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.BrowseContacts().findContentItem("Contact"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseContacts().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditContact.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditContact
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: lightSwitchApplication.AddEditContact
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: lightSwitchApplication.Contact
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        BirthDate: {
            _$class: msls.ContentItem,
            _$name: "BirthDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: Date
        },
        Gender: {
            _$class: msls.ContentItem,
            _$name: "Gender",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        ZIP: {
            _$class: msls.ContentItem,
            _$name: "ZIP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditContact
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditContact, {
        /// <field>
        /// Called when a new AddEditContact screen is created.
        /// <br/>created(msls.application.AddEditContact screen)
        /// </field>
        created: [lightSwitchApplication.AddEditContact],
        /// <field>
        /// Called before changes on an active AddEditContact screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditContact screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditContact],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("left"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the BirthDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BirthDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("BirthDate"); }],
        /// <field>
        /// Called after the Gender content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Gender_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Gender"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Email"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("right"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("City"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("State"); }],
        /// <field>
        /// Called after the ZIP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ZIP_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("ZIP"); }]
    });

}(msls.application));