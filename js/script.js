function init() {

    new Vue({
        el: '.container',
        data: {
            testo: 'Douglas Costa #11',
            imgSrc: 'img/douglas-costa-0.jpg',
            cont: 0
        },
        mounted: function () {
            setInterval(this.nextImg, 3000);
        },
        methods: {
            nextImg: function () {
                if (this.cont >= 3) {
                    this.cont = 0;
                }else{
                    this.cont++;
                }
                this.imgSrc = 'img/douglas-costa-'+ this.cont  +'.jpg';
                console.log(this.imgSrc);
            },
            prevImg: function () {
                if (this.cont <= 0) {
                    this.cont = 3;
                }else{
                    this.cont--;
                }
                this.imgSrc = 'img/douglas-costa-'+ this.cont  +'.jpg';
                console.log(this.imgSrc);
            }
        }
    });
}

$(init);