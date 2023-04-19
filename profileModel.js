export default class profileModel
{
    constructor(edit_name_field, edit_email_field)
    {
        this.edit_name_field = edit_name_field;
        this.edit_email_field = edit_email_field;
        this.on_edit = -1;
    }

    edit_statement()
    {
        this.on_edit *= -1;
        return this.on_edit;
    }
    
    submit_changes()
    {
        if (this.edit_name_field.value != "")
        {
            sessionStorage.setItem("username", this.edit_name_field.value);
        }
        if (this.edit_email_field.value != "")
        {
            sessionStorage.setItem("email", this.edit_email_field.value);
        }

        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("email"));
        let atr_array = [];

        atr_array.push(sessionStorage.getItem("username"), sessionStorage.getItem("email"));
        return atr_array;
    }

    get_atributes()
    {
        let atr_array = [];

        atr_array.push(sessionStorage.getItem("username"), sessionStorage.getItem("email"));
        return atr_array;
    }

}