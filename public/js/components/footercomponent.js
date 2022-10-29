Vue.component('FooterComp', {
    template:`
    <div class="content">
    <section class="subscribe">
    <div class="sub__content container">

        <div class="sub__info">
            <div class="sub__face"><img src="svg/face.svg" alt="face"></div>
            <p class="sub__face__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                condimentum“</p>
        </div>

        <div class="sub__message">
            <h3 class="sub__message__text"><span class="sub__span">SUBSCRIBE</span> <br>
                FOR OUR NEWLETTER AND PROMOTION</h3>
            <form action="#">
                <div class="sub__message__form">

                    <input class="email" type="email" placeholder="Enter Your Email">
                    <button class="button__sub" type="submit">Subscribe</button>

                </div>
            </form>
        </div>

        </div>
    </section>
    <div class="footer">
    <div class="footer__item container">
        <div class="footer__item__sec ">
            <p class="footer__text">© 2021 Brand All Rights Reserved.</p>
        </div>

        <div class="footer__item__contact">
            <a href="#"><img src="svg/facebook.svg" alt=""></a>
            <a href="#"><img class="footer__inst" src="svg/inst.svg" alt=""></a>
            <a href="#"><img src="svg/P.svg" alt=""></a>
            <a href="#"><img src="svg/twitter.svg" alt=""></a>
        </div>
    </div>
</div>
    </div>
 
    `
})