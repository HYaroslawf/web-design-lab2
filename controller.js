

export default class controller
{
    constructor(calcModel, calcView, profileModel, profileView, registrModel, submit_reg, loginModel, submit_log, buttons, edit_button, navbar_prof, navbar_login, navbar_registr)
    {
        this.calcModel = calcModel;
        this.calcView = calcView;
        this.profileModel = profileModel;
        this.profileView = profileView;
        this.buttons = buttons;
        this.registrModel = registrModel;
        this.submit_reg = submit_reg;
        this.loginModel = loginModel;
        this.submit_log = submit_log;
        
        this.buttons.forEach(button => {
            button.addEventListener('click', this.button_process.bind(this))
        });
        this.edit_btn = edit_button;
        if ("http://127.0.0.1:5500/profile.html" == window.location.href)
        {
            this.update_profile();
            this.edit_btn.addEventListener('click', this.edit_profile.bind(this));
        }
        
        if ("http://127.0.0.1:5500/registr.html" == window.location.href)
        {
            this.submit_reg.addEventListener('click', this.registr_submit.bind(this));
        }

        if ("http://127.0.0.1:5500/login.html" == window.location.href)
        {
            this.submit_log.addEventListener('click', this.login_submit.bind(this));
        }

        this.navbar_prof = navbar_prof;
        this.navbar_login = navbar_login;
        this.navbar_registr = navbar_registr;
        this.navbar_update();

        
        this.term = "test";
    }

    button_process(event)
    {
        console.log(event.target.innerText);
        this.calcView.update_display(this.calcModel.calc_logic(event.target.innerText));
    }

    edit_profile(event)
    {
        if (this.profileModel.edit_statement() == 1)
        {
            this.profileView.profile_edit_on();
        }
        else
        {
            let atr_array = this.profileModel.submit_changes();
            this.profileView.profile_edit_off(atr_array);
        }
    }

    update_profile()
    {
        this.profileView.update_atributes(this.profileModel.get_atributes());
    }

    navbar_update()
    {
        if (sessionStorage.getItem("EnterFlag") == "true")
        {
            this.navbar_prof.style.display = '';
            this.navbar_login.style.display = 'none';
            this.navbar_registr.style.display = 'none';
        }
        else
        {
            this.navbar_prof.style.display = 'none';
            this.navbar_login.style.display = '';
            this.navbar_registr.style.display = '';
        }
    }

    registr_submit(event)
    {
        this.registrModel.submit();
    }

    login_submit(event)
    {
        this.loginModel.submit();
    }
}