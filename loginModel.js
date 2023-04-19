export default class loginModel
{
    constructor(email_field, password_field)
    {
        this.email_field = email_field;
        this.password_field = password_field;
    }

    submit()
    {
        if (this.email_field.value != "" && this.password_field.value != "")
        {
            sessionStorage.setItem("email", this.email_field.value);
            sessionStorage.setItem("username", "@username");
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