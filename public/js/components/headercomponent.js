Vue.component('HeaderComp', {
    data() {
        return {
            showMenu: false,
            showCart: false,
        }
    },
    template: ` <header class="header">
                    <div class="container">
        <nav class="menu">
            <ul class="menu_left">
                <li class="menu_left__item_1"><a href="index.html" class="menu__link"><img src="svg/logo.svg"
                            alt="logo"></a>
                </li>
                <search-comp></search-comp>
            </ul>
            <ul class="menu_right">
                <li class="menu_right__item_1"><a href="#" class="menu__link"><img src="svg/menu.svg"
                            alt="menu"></a>

                    
                </li>
                <li class="menu_right__item_2"><a href="registration.html" class="menu__link"><img
                            src="svg/person.svg" alt="person"></a></li>
                <li class="menu_right__item_3"><a href="cart.html" class="menu__link"><img src="svg/korzina.svg"
                            alt="korzina"></a></li>
            </ul>
        </nav>
    </div>

</header>`
});
Vue.component('SearchComp', {
    data() {
        return {
            userSearch: ''

        }
    },
    template: `
    <div class="header__links__left--search">
            <form action="#" method="post" @submit.prevent="$root.$refs.products.filter(userSearch)">
                <input type="text" class="header__links__left--search-field" placeholder="Search" v-model="userSearch">
                    <button class="header__links__left--search-button" type="submit">
                        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22463 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71814 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" fill="#E8E8E8"/>
                        </svg>                       
                    </button>
            </form>
        </div>`
})

Vue.component('NavComp', {
    template: `<div class="mega-box" v-show="$parent.showMenu">
    <a class="menu-x" href=""><img src="./svg/menu x.svg" alt="x"></a>
    <h2 class="mega-menu">
        MENU
    </h2>
    <div class="mega-item">
        <h3 class="mega-heading">MAN</h3>
        <a class="mega-link" class="mega-link" href="">Accessories</a>
        <a class="mega-link" class="mega-link" href="">Bags</a>
        <a class="mega-link" class="mega-link" href="">Denim</a>
        <a class="mega-link" class="mega-link" href="">T-Shirts</a>
    </div>

    <div class="mega-item">
        <h3 class="mega-heading">WOMAN</h3>
        <a class="mega-link" class="mega-link" href="">Accessories</a>
        <a class="mega-link" class="mega-link" href="">Jackets & Coats</a>
        <a class="mega-link" class="mega-link" href="">Polos</a>
        <a class="mega-link" class="mega-link" href="">T-Shirts</a>
        <a class="mega-link" class="mega-link" href="">Shirts</a>
    </div>

    <div class="mega-item">
        <h3 class="mega-heading">KIDS</h3>
        <a class="mega-link" class="mega-link" href="">Accessories</a>
        <a class="mega-link" class="mega-link" href="">Jackets & Coats</a>
        <a class="mega-link" class="mega-link" href="">Polos</a>
        <a class="mega-link" class="mega-link" href="">T-Shirts</a>
        <a class="mega-link" class="mega-link" href="">Shirts</a>
        <a class="mega-link" class="mega-link" href="">Bags</a>
    </div>
    <div class="nav__icon-close">
                <button @click="$parent.showMenu = !$parent.showMenu">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z" fill="#6F6E6E"/>
                    </svg>     
                </button>
        </div>
</div>`
})