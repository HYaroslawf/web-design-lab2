export default class profileView
{
    constructor(username, email, edit_name, edit_email)
    {
        this.name = username;
        this.email = email;
        this.edit_email = edit_email;
        this.edit_name = edit_name;
        
    }

    
    profile_edit_on()
    {
        this.edit_name.style.display = '';
        this.edit_email.style.display = '';
        console.log("working");
    }

    profile_edit_off(atr_array)
    {
        this.edit_name.value = "";
        this.edit_email.value = "";
        this.edit_name.style.display = 'none';
        this.edit_email.style.display = 'none';
        this.name.innerText = atr_array[0];
        this.email.innerText = atr_array[1];
        console.log("closing");
    }

    update_atributes(atr_array)
    {
        this.name.innerText = atr_array[0];
        this.email.innerText = atr_array[1];
    }
}