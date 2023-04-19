export default class calc
{
    constructor()
    {
        this.buttons = [];
        this.display = "";
        this.OP_flag = false;
    }

    calc_logic(btn_value)
    {
        if (btn_value == "1" || btn_value == "2" || btn_value == "3" || btn_value == "4" || btn_value == "5" || btn_value == "6" || btn_value == "7" || btn_value == "8" || btn_value == "9" || btn_value == "0")
        {
            this.display += btn_value;
            this.OP_flag = false;
        }
        if (btn_value == "+" || btn_value == "-" || btn_value == "*" || btn_value == "/")
        {
            if (this.OP_flag == false)
            {
                this.display += btn_value;
                this.OP_flag = true;
            }
            else
            {
                let display_to_chars = this.display.split("");
                display_to_chars[display_to_chars.length - 1] = btn_value;
                this.display = display_to_chars.join("");
            }
        }

        if (btn_value == "C")
        {
            this.display = "";
            this.OP_flag = false;
        }

        if (btn_value == "=")
        {
            this.display = eval(this.display);
            this.OP_flag = false;
        }
        
        

        return this.display;
    }

}

