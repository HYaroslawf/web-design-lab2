export default class registrModel
{
    constructor(username_field, email_field, password_field, Rpassword_field)
    {
        this.username_field = username_field;
        this.email_field = email_field;
        this.password_field = password_field;
        this.Rpassword_field = Rpassword_field;
    }

    submit()
    {
        if (this.username_field.value != "" && this.email_field.value != "" && this.password_field.value == this.Rpassword_field.value)
        {
            sessionStorage.setItem("username", this.username_field.value);
            sessionStorage.setItem("email", this.email_field.value);
            sessionStorage.setItem("password", this.password_field.value);
            sessionStorage.setItem("EnterFlag", "true");
            window.location.href = "http://127.0.0.1:5500/profile.html";
        }
        else
        {
            alert("field error");
        }
    }


}