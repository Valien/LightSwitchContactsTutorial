using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Contact
    {
        partial void BirthDate_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.BirthDate.HasValue && this.BirthDate > DateTime.Today)
            {
                results.AddPropertyError("Birthdate cannot be in the future");

            }

        }
    }
}
