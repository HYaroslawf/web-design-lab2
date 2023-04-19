export default class view
{
    constructor(display, edit_name, edit_email)
    {
        this.display_value = display;
        this.edit_email = edit_email;
        this.edit_name = edit_name;
    }

    update_display(new_value)
    {
        this.display_value.innerText = new_value;
    }

    profile_edit_on()
    {
        this.edit_name.style.display = '';
        this.edit_email.style.display = '';
        console.log("working");
    }

    profile_edit_off()
    {
        this.edit_name.style.display = 'none';
        this.edit_email.style.display = 'none';
        console.log("closing");
    }
}
