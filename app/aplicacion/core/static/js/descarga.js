const d= document,
n= navigator,
ua = n.userAgent;

userDeviceInfo("user-divece");

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),

    isMObile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },

    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        },
    },


    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function(){
            return(
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
            );
        },
    };

    //en la imagen debe de ingresar la imagen del código qr
    if(isDesktop.windows()){
        $id.innerHTML += `<center><img src="" alt="No disponible" style="max-width: 300px; width: 100%; text-align: center;" ></center>`;
    }

    //Acá debes de ingresar el link de donde tu tienes tu apk, en el href
    if(isMObile.any()){
        $id.innerHTML += `<a href="#">

                            <center><button type="button">
                                App
                            </button></center>

                          </a>`;
    }

}