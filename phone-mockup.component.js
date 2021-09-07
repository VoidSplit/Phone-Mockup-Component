class PhoneMockupElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        const model = this.getAttribute('model');
        const color = this.getAttribute('color');
        this.shadowRoot.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

            .pm-w.black  {
                --bg: #24292e;
                --ts: #000000;
                --tnc: #ffffff;
                --tc: #eeeeee;

                --gc1: #272c31;
                --gc2: #202529;
                --gc3: #0e1012;
                --gc4: #0e1012;
                --gc5: #3a424a;

                --b1: #161a1d;
                --b2: #3b4147;
                --b3: #202529;
                --b4: #282d31;
                --b5: #161a1d;
                --b6: #161a1d
            }
            .pm-w.white  {
                --bg: #C9CFD4;
                --ts: #ffffff;
                --tnc: #171717;
                --tc: #000000;

                --gc1: #D6D9DD;
                --gc2: #9EA6AC;
                --gc3: #899097;
                --gc4: #90969C;
                --gc5: #CFD4DA;

                --b1: #8E959B;
                --b2: #D2D7DD;
                --b3: #9DA7AF;
                --b4: #B7BBBE;
                --b5: #747E85;
                --b6: #7C7F81
            }
            .pm-w.red  {
                --bg: #C93E3E;
                --ts: #492626;
                --tnc: #FFCECE;
                --tc: #FFFFFF;

                --gc1: #C93E3E;
                --gc2: #A32020;
                --gc3: #9C2D2D;
                --gc4: #722222;
                --gc5: #FF6D6D;

                --b1: #722222;
                --b2: #E25E5E;
                --b3: #C53838;
                --b4: #D84C4C;
                --b5: #962C2C;
                --b6: #722222
            }
            .pm-w.blue  {
                --bg: #639ABE;
                --ts: #263249;
                --tnc: #CEDEFF;
                --tc: #FFFFFF;

                --gc1: #639ABE;
                --gc2: #3D7494;
                --gc3: #235D68;
                --gc4: #235264;
                --gc5: #89ACC8;

                --b1: #406B83;
                --b2: #8CBBDA;
                --b3: #5D97B8;
                --b4: #4D7F96;
                --b5: #455F77;
                --b6: #305168
            }
            .pm-w.green  {
                --bg: #63BE6B;
                --ts: #304926;
                --tnc: #CEFFCE;
                --tc: #FFFFFF;

                --gc1: #6BBE63;
                --gc2: #44943D;
                --gc3: #236823;
                --gc4: #236423;
                --gc5: #8EC889;

                --b1: #488340;
                --b2: #92DA8C;
                --b3: #5DB85D;
                --b4: #4D9651;
                --b5: #45774D;
                --b6: #356830
            }

            * {
                margin: 0;
                padding: 0;
                text-decoration: none;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            .pm-w {
                background-color: var(--bg);
                color: var(--tc);
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            .pm-n {
                padding: 25px;
                font-size: 2em;
                text-shadow: 0 5px 5px var(--ts);
                color: var(--tnc);
            }
            .pm {
                background: linear-gradient(145deg, var(--gc1), var(--gc2));
                box-shadow:  0 0 150px var(--gc3),
                            inset -5px -5px 10px var(--gc4),
                            inset 5px 5px 10px var(--gc5);
                position: relative;
                height: 730px;
                width: 380px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 25px;
                border-radius: 50px;
                -webkit-border-radius: 25px;
                -moz-border-radius: 25px;
                -ms-border-radius: 25px;
                -o-border-radius: 25px;
            }
            .pm-s {
                border-radius: 5px;
                height: 640px;
                width: 360px;
                overflow: hidden;
            
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                -ms-border-radius: 5px;
                -o-border-radius: 5px;
            }
            .pm-a-t {
                position: absolute;
                height: 6px;
                width: 100px;
                border-radius: 8px;
                top: 20px;
                left: calc(50% - 50px);
                box-shadow: 0 0 5px var(--b1) inset;
            
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                -ms-border-radius: 8px;
                -o-border-radius: 8px;
            }
            .pm-b-su,
            .pm-b-sd {
                background: linear-gradient(90deg, var(--b2), var(--b3));
                position: absolute;
                height: 70px;
                width: 3px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                left: -3px;
            }
            .pm-b-su {
                top: 150px;
            }
            .pm-b-sd {
                top: 225px;
            }
            .pm-b-p {
                background: linear-gradient(-90deg, var(--b4), var(--b5));
                top: 190px;
                position: absolute;
                height: 50px;
                width: 3px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                right: -3px;
            }
            .pm-b-b {
                box-shadow: 0 0 5px var(--b6) inset;
                position: absolute;
                height: 28px;
                width: 60px;
                border-radius: 8px;
                bottom: 9px;
                left: calc(50% - 30px);
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                -ms-border-radius: 8px;
                -o-border-radius: 8px;
            }
        </style>
        <div class="pm-w ${color}">
            <div class="pm">
                <div class="pm-b-w">
                    <div class="pm-a-t"></div>
                    <div class="pm-b-su"></div>
                    <div class="pm-b-sd"></div>
                    <div class="pm-b-b"></div>
                    <div class="pm-b-p"></div>
                </div>
                <div class="pm-s">
                    <slot></slot>
                </div>
            </div>
            <div class="pm-n">${model}</div>
        </div>
        `;
    }
}

window.customElements.define('phone-mockup', PhoneMockupElement);