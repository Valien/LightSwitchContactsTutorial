/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Contact(entitySet) {
        /// <summary>
        /// Represents the Contact entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contact.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this contact.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this contact.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this contact.
        /// </field>
        /// <field name="BirthDate" type="Date">
        /// Gets or sets the birthDate for this contact.
        /// </field>
        /// <field name="Gender" type="String">
        /// Gets or sets the gender for this contact.
        /// </field>
        /// <field name="EmailAddresses" type="msls.EntityCollection" elementType="msls.application.EmailAddress">
        /// Gets the emailAddresses for this contact.
        /// </field>
        /// <field name="PhoneNumbers" type="msls.EntityCollection" elementType="msls.application.PhoneNumber">
        /// Gets the phoneNumbers for this contact.
        /// </field>
        /// <field name="Addresses" type="msls.EntityCollection" elementType="msls.application.Address">
        /// Gets the addresses for this contact.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this contact.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this contact.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this contact.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this contact.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this contact.
        /// </field>
        /// <field name="details" type="msls.application.Contact.Details">
        /// Gets the details for this contact.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmailAddress(entitySet) {
        /// <summary>
        /// Represents the EmailAddress entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this emailAddress.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this emailAddress.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this emailAddress.
        /// </field>
        /// <field name="EmailType" type="String">
        /// Gets or sets the emailType for this emailAddress.
        /// </field>
        /// <field name="Contact" type="msls.application.Contact">
        /// Gets or sets the contact for this emailAddress.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this emailAddress.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this emailAddress.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this emailAddress.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this emailAddress.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this emailAddress.
        /// </field>
        /// <field name="details" type="msls.application.EmailAddress.Details">
        /// Gets the details for this emailAddress.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PhoneNumber(entitySet) {
        /// <summary>
        /// Represents the PhoneNumber entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this phoneNumber.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this phoneNumber.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this phoneNumber.
        /// </field>
        /// <field name="PhoneType" type="String">
        /// Gets or sets the phoneType for this phoneNumber.
        /// </field>
        /// <field name="Contact" type="msls.application.Contact">
        /// Gets or sets the contact for this phoneNumber.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this phoneNumber.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this phoneNumber.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this phoneNumber.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this phoneNumber.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this phoneNumber.
        /// </field>
        /// <field name="details" type="msls.application.PhoneNumber.Details">
        /// Gets the details for this phoneNumber.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Address(entitySet) {
        /// <summary>
        /// Represents the Address entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this address.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this address.
        /// </field>
        /// <field name="AddressType" type="String">
        /// Gets or sets the addressType for this address.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this address.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this address.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this address.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this address.
        /// </field>
        /// <field name="ZIP" type="String">
        /// Gets or sets the zIP for this address.
        /// </field>
        /// <field name="Contact" type="msls.application.Contact">
        /// Gets or sets the contact for this address.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this address.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this address.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this address.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this address.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this address.
        /// </field>
        /// <field name="details" type="msls.application.Address.Details">
        /// Gets the details for this address.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Contacts" type="msls.EntitySet">
        /// Gets the Contacts entity set.
        /// </field>
        /// <field name="EmailAddresses" type="msls.EntitySet">
        /// Gets the EmailAddresses entity set.
        /// </field>
        /// <field name="PhoneNumbers" type="msls.EntitySet">
        /// Gets the PhoneNumbers entity set.
        /// </field>
        /// <field name="Addresses" type="msls.EntitySet">
        /// Gets the Addresses entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Contact: $defineEntity(Contact, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "BirthDate", type: Date },
            { name: "Gender", type: String },
            { name: "EmailAddresses", kind: "collection", elementType: EmailAddress },
            { name: "PhoneNumbers", kind: "collection", elementType: PhoneNumber },
            { name: "Addresses", kind: "collection", elementType: Address },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmailAddress: $defineEntity(EmailAddress, [
            { name: "Id", type: Number },
            { name: "Email", type: String },
            { name: "EmailType", type: String },
            { name: "Contact", kind: "reference", type: Contact },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PhoneNumber: $defineEntity(PhoneNumber, [
            { name: "Id", type: Number },
            { name: "Phone", type: String },
            { name: "PhoneType", type: String },
            { name: "Contact", kind: "reference", type: Contact },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Address: $defineEntity(Address, [
            { name: "Id", type: Number },
            { name: "AddressType", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "ZIP", type: String },
            { name: "Contact", kind: "reference", type: Contact },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Contacts", elementType: Contact },
            { name: "EmailAddresses", elementType: EmailAddress },
            { name: "PhoneNumbers", elementType: PhoneNumber },
            { name: "Addresses", elementType: Address }
        ], [
            {
                name: "Contacts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Contacts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Contacts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmailAddresses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmailAddresses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmailAddresses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PhoneNumbers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PhoneNumbers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PhoneNumbers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Addresses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Addresses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Addresses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
