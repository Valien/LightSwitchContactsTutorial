/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Contact, {
        /// <field>
        /// Called when a new contact is created.
        /// <br/>created(msls.application.Contact entity)
        /// </field>
        created: [lightSwitchApplication.Contact]
    });

    msls._addEntryPoints(lightSwitchApplication.EmailAddress, {
        /// <field>
        /// Called when a new emailAddress is created.
        /// <br/>created(msls.application.EmailAddress entity)
        /// </field>
        created: [lightSwitchApplication.EmailAddress]
    });

    msls._addEntryPoints(lightSwitchApplication.PhoneNumber, {
        /// <field>
        /// Called when a new phoneNumber is created.
        /// <br/>created(msls.application.PhoneNumber entity)
        /// </field>
        created: [lightSwitchApplication.PhoneNumber]
    });

    msls._addEntryPoints(lightSwitchApplication.Address, {
        /// <field>
        /// Called when a new address is created.
        /// <br/>created(msls.application.Address entity)
        /// </field>
        created: [lightSwitchApplication.Address]
    });

}(msls.application));
