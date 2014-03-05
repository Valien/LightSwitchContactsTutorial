/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAddress.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAddress
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.AddEditAddress,
            value: lightSwitchApplication.AddEditAddress
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.AddEditAddress,
            value: lightSwitchApplication.Address
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: lightSwitchApplication.Address
        },
        AddressType: {
            _$class: msls.ContentItem,
            _$name: "AddressType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: lightSwitchApplication.Address
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        ZIP: {
            _$class: msls.ContentItem,
            _$name: "ZIP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: String
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Address,
            value: lightSwitchApplication.Contact
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Contact",
            screen: lightSwitchApplication.AddEditAddress,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAddress
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAddress, {
        /// <field>
        /// Called when a new AddEditAddress screen is created.
        /// <br/>created(msls.application.AddEditAddress screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAddress],
        /// <field>
        /// Called before changes on an active AddEditAddress screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAddress screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAddress],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("left"); }],
        /// <field>
        /// Called after the AddressType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("AddressType"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("City"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("right"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("State"); }],
        /// <field>
        /// Called after the ZIP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ZIP_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("ZIP"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("Contact"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAddress().findContentItem("RowTemplate"); }]
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
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        BirthDate: {
            _$class: msls.ContentItem,
            _$name: "BirthDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: Date
        },
        Gender: {
            _$class: msls.ContentItem,
            _$name: "Gender",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Contact,
            value: String
        },
        EmailAddresses: {
            _$class: msls.ContentItem,
            _$name: "EmailAddresses",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: lightSwitchApplication.AddEditContact
        },
        EmailAddresses1: {
            _$class: msls.ContentItem,
            _$name: "EmailAddresses1",
            _$parentName: "EmailAddresses",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditContact,
                _$entry: {
                    elementType: lightSwitchApplication.EmailAddress
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmailAddresses1",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.EmailAddress,
            value: lightSwitchApplication.EmailAddress
        },
        PhoneNumbers: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumbers",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: lightSwitchApplication.AddEditContact
        },
        PhoneNumbers1: {
            _$class: msls.ContentItem,
            _$name: "PhoneNumbers1",
            _$parentName: "PhoneNumbers",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditContact,
                _$entry: {
                    elementType: lightSwitchApplication.PhoneNumber
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "PhoneNumbers1",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.PhoneNumber,
            value: lightSwitchApplication.PhoneNumber
        },
        Addresses: {
            _$class: msls.ContentItem,
            _$name: "Addresses",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: lightSwitchApplication.AddEditContact
        },
        Addresses1: {
            _$class: msls.ContentItem,
            _$name: "Addresses1",
            _$parentName: "Addresses",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.AddEditContact,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditContact,
                _$entry: {
                    elementType: lightSwitchApplication.Address
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Addresses1",
            screen: lightSwitchApplication.AddEditContact,
            data: lightSwitchApplication.Address,
            value: lightSwitchApplication.Address
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
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("right"); }],
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
        /// Called after the EmailAddresses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddresses_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("EmailAddresses"); }],
        /// <field>
        /// Called after the EmailAddresses1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddresses1_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("EmailAddresses1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PhoneNumbers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumbers_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("PhoneNumbers"); }],
        /// <field>
        /// Called after the PhoneNumbers1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneNumbers1_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("PhoneNumbers1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Addresses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Addresses_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Addresses"); }],
        /// <field>
        /// Called after the Addresses1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Addresses1_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("Addresses1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditContact().findContentItem("RowTemplate2"); }]
    });

    lightSwitchApplication.AddEditEmailAddress.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmailAddress
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.AddEditEmailAddress,
            value: lightSwitchApplication.AddEditEmailAddress
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.AddEditEmailAddress,
            value: lightSwitchApplication.EmailAddress
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.EmailAddress,
            value: lightSwitchApplication.EmailAddress
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.EmailAddress,
            value: String
        },
        EmailType: {
            _$class: msls.ContentItem,
            _$name: "EmailType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.EmailAddress,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.EmailAddress,
            value: lightSwitchApplication.EmailAddress
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.EmailAddress,
            value: lightSwitchApplication.Contact
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Contact",
            screen: lightSwitchApplication.AddEditEmailAddress,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmailAddress
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmailAddress, {
        /// <field>
        /// Called when a new AddEditEmailAddress screen is created.
        /// <br/>created(msls.application.AddEditEmailAddress screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmailAddress],
        /// <field>
        /// Called before changes on an active AddEditEmailAddress screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmailAddress screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmailAddress],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("left"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("Email"); }],
        /// <field>
        /// Called after the EmailType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailType_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("EmailType"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("right"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("Contact"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmailAddress().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditPhoneNumber.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPhoneNumber
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.AddEditPhoneNumber,
            value: lightSwitchApplication.AddEditPhoneNumber
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.AddEditPhoneNumber,
            value: lightSwitchApplication.PhoneNumber
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.PhoneNumber,
            value: lightSwitchApplication.PhoneNumber
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.PhoneNumber,
            value: String
        },
        PhoneType: {
            _$class: msls.ContentItem,
            _$name: "PhoneType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.PhoneNumber,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.PhoneNumber,
            value: lightSwitchApplication.PhoneNumber
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.PhoneNumber,
            value: lightSwitchApplication.Contact
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Contact",
            screen: lightSwitchApplication.AddEditPhoneNumber,
            data: lightSwitchApplication.Contact,
            value: lightSwitchApplication.Contact
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPhoneNumber
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPhoneNumber, {
        /// <field>
        /// Called when a new AddEditPhoneNumber screen is created.
        /// <br/>created(msls.application.AddEditPhoneNumber screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPhoneNumber],
        /// <field>
        /// Called before changes on an active AddEditPhoneNumber screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPhoneNumber screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPhoneNumber],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("left"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("Phone"); }],
        /// <field>
        /// Called after the PhoneType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhoneType_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("PhoneType"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("right"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("Contact"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhoneNumber().findContentItem("RowTemplate"); }]
    });

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

}(msls.application));