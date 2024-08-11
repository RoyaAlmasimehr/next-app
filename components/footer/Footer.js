import styles from "./Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <h4>اینورس</h4>
              <li>مجوز و گواهینامه‌ها</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>تماس با ما</li>
              <li>درباره ما</li>
            </ul>
          </div>
          <div className="col">
            <h4>راهنما</h4>
            <ul>
              <li>تضمین اصالت کالا</li>
              <li>شرایط عودت کالا</li>
              <li>نحوه ارسال کالا</li>
              <li>راهنمای خرید</li>
              <li>تخفیف‌ها</li>
            </ul>
          </div>
          <div className="col">
            <h4>خدمات</h4>
            <ul>
              <li>مشاوره رایگان</li>
              <li>پشتیبانی</li>
              <li>اعتبار سنجی خریداران</li>
              <li>اسمبل آنلاین</li>
              <li>خرید سازمانی</li>
              <li>فروش همکار</li>
              <li>معرفی به دوستان</li>
            </ul>
          </div>
          <div className={`col ${styles.socials}`}>
            <h4>با ما در ارتباط باشید.</h4>
            <ul>
              <li>
                <FaInstagramSquare size="30px" />
              </li>
              <li>
                <FaTelegram size="30px" />
              </li>
              <li>
                <BsTwitterX size="30px" />
              </li>

              <li>
                <FaFacebookF size="30px" />
              </li>
              <li>
                <FaLinkedin size="30px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
