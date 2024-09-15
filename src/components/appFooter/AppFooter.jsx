import "./appFooter.scss";
import logo from "../../icons/Logo.svg";

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__about-company">
                <div id="footer__logo">
                    <img src={logo} alt="Miloelya" />
                </div>
                <div className="footer__about-company-description">
                    Фальшивый мерч-сайт, созданный для отработки навыков создания web-приложений. <br />
                    На сайте ничего нельзя купить и все действия - симуляция настоящего интернет-магазина.</div>
            </div>
            <hr />
            <div className="footer__about-author">
                <div className="footer__about-author-name">
                    Дизайнер и разработчик сайта <br />
                    <a href="https://github.com/VKohai" target="_blank">｢ Vlad Kohai 」</a>
                </div>
                <div className="footer__about-author-offer">
                    Создаю красивые и запоминающиеся сайты, <br />
                    которые увеличивают Ваши проаджи.</div>
            </div>
        </footer>
    )
}

export default AppFooter;