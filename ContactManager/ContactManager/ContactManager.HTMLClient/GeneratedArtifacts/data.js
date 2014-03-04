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
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this contact.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this contact.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this contact.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this contact.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this contact.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this contact.
        /// </field>
        /// <field name="ZIP" type="String">
        /// Gets or sets the zIP for this contact.
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
            { name: "Phone", type: String },
            { name: "Email", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "ZIP", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Contacts", elementType: Contact }
        ], [
            {
                name: "Contacts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Contacts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Contacts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
