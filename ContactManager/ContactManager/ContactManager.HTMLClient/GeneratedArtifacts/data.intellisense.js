/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Contact, {
        /// <field>
        /// Called when a new contact is created.
        /// <br/>created(msls.application.Contact entity)
        /// </field>
        created: [lightSwitchApplication.Contact]
    });

}(msls.application));
