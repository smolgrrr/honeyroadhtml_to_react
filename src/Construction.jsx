import { Link } from "react-router-dom";
import useCDN from "./hooks/useCDN";
import "./silkroad.css";

const Construction = (props) => {
  useCDN();

  return (
    <div>
      <div id="all_but_footer">
        <div>
          <header className="head-stream">
            <Link to="/" className="making-logo">
              <img src="/logo.png" alt="" width="58" height="85" />
              <div>
                <h4>Honey Road</h4>
                <h6>anonymous market</h6>
              </div>
            </Link>
            <div className="head-content">
              <div className="head-status">
                <div className="status-counter">
                  <a href="#">
                    messages <span className="nav_count">0</span>
                  </a>
                  <span className="status-divider" />
                  <a href="#">
                    orders <span className="nav_count">0</span>
                  </a>
                </div>
                <div className="profile-section">
                  <div>
                    <small>a few words from</small>
                    <span>SmolGrrr</span>
                  </div>
                  <img width="50" height="40" src="/bera.png" alt="" />
                </div>
              </div>
              <div className="direct-action">
                <div className="search-form-wraper">
                  <label className="search_label" htmlFor="3487">
                    Search
                  </label>
                  <div className="search-input-wraper">
                    <input id="3487" type="text" />
                    <button>Go</button>
                  </div>
                </div>
                <div className="say-hi">
                  <p>
                    <span>Hi, </span>
                    <a href="" id="welcome_name">
                      anon
                    </a>
                  </p>
                  <span className="cart-divider" />
                  <a href="#" id="">
                    <span id="cart_count">0</span>
                    <img
                      src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAQAAADdhmJCAAAACXBIWXMAAEGHAABBhwEONqVyAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIWSURBVHjapJS/a1NRHMU/J4mt2mrS5kdb1ChkcBPFCoo6uDiJwYIgVAcrOrh0EvwjnB0U0cEfddBBRBA0Sl0qrYg/0MHYIFarSUpKsVRrfV+H1NrwXsJ76Ts8uPfyOPdzz+Ud6THbeckbXvGOD1Ro5tE92ZImtFU0IYXZQIbNbCRLLxc41wzJf+2Q6aPWBiepnd6X6XBwk7BqsfqIcWMlx0FxTcoJHm4tyRxJ9lFkeCUk1XALWh+AI6tr7sVnMp0JYHJecyEX2mXgRICjRKm4nWOakOmAb5LbeusmmeYBcMo3SYbPIY/lK8BBUr4sWtlE3svkOU9JcsSXSScJbxO4A5wm7MOkhxB577BS+i7TTh+xHpNpmzdJketAvw+SNAtM1tuhV6Zv6qpfQ1qjLqV0S58UidTZ4QUj7CbLJRK00UGcKFHaiZIkTYxO4iRoBR6xUP+0x2Uqq6AfcpYVaFWOZvRF7zWqYR0VkQa5Q5wWylSYokiREkVKlJmmwiy/mOeP919cVYeGZPqts2rX6qD1WFW3xmQa1/7mOraqqzLl1NNsUSPUorwcZYLUozvYeUpkGOQ1qzDAMAxwlsa2bD3EDA+9nHep4LrURur3uuJRnnCScS4CIUCL77+RgJ/spQ+4yRg5L5IBDMPRngY5hDWCYRoSImLu/u9e3LVRLa0jDcCWeh8kldOs7qqt4Z0MaEpfdUiIvwMA0R2sBIbRlZ0AAAAASUVORK5CYII="
                      id="cart_image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div id="main_menu_wrapper">
            <div id="main_menu_folder">
              <div id="main_menu_title">
                <span id="main_menu_title_part">Shop by</span> Category
              </div>
              <div id="main_menu">
                <a href="" style={{}}>
                  Honey
                </a>
                <span className="footnote"> 1</span>
                <br />{" "}
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="main-info-of-product">
            <span className="img_one_wrapper" style={{ margin: "0 20px 0 0" }}>
              <img
                src="pngtree-simple-cartoon-honey-clipart-material-png-image_2742325.jpeg"
                className="main one responsive-image"
              />
            </span>
            <span style={{ display: "inline-block", verticalAlign: "top" }}>
              <span className="h1">Bear's Organic Honey 160g</span>
              <br />
              <br />
              <span className="price_big">
                <i className="fak fa-satoshisymbol-solid" />
                125k
              </span>
              &nbsp;&nbsp;&nbsp;
              <span
                className="container container_small"
                style={{ margin: "0 0 0 4px", backgroundColor: "#E6F2E6" }}
              >
                <Link to="/checkout">buy now</Link>
              </span>
              <br />
              <br />
              <span className="container container_small">
                seller: <a href="https://twitter.com/smolgrrr">smolgrrr(94)</a>
                <br />
                ships from: Australia
                <br />
                ships to: Worldwide
                <br />
                category:{" "}
                <a href="" style={{}}>
                  Honey
                </a>
                <br />
              </span>
              <br />
              <br />
              postage options:
              <br />
              <div
                className="dropdown_wrapper"
                style={{ display: "inline-block" }}
              >
                <select name="postage">
                  <option value={364677}>free ship (฿0.0001)</option>
                </select>
              </div>{" "}
              <div
                className="info_wrapper"
                style={{ position: "relative", bottom: 2 }}
              >
                <div className="info_folder">
                  <div className="info_icon">?</div>
                  <div className="info_message">
                    These options are displayed here for your information only.
                    You must choose a shipping option from your shopping cart
                    before checking out.
                  </div>
                </div>
              </div>
              <br />
              <br />
              <span className="container container_small">
                <a
                  href="https://twitter.com/smolgrrr/status/1529430160986218496?s=20&t=_NQ8TDVBqNVQKo1RxesShQ"
                  target="_blank"
                >
                  report this item
                </a>
              </span>
              <br />
              <br />
            </span>
          </div>
          <div
            className="container container_large"
            style={{ margin: "20px 0 40px" }}
          >
            <div className="h3">Description</div>
            <br />
            Bear's Onchain-Famous Honey is the best KYC-free honey on the market{" "}
            <br />
            <br />
            <br />
            AUS made 100% pure high quality organic honey
          </div>
          <span className="h3">Customer reviews</span>
          <br />
          <br />
          <div className="responsive-table">
            <table className="zebra">
              <tbody>
                <tr>
                  <th>rating</th>
                  <th>review</th>
                  <th>name</th>
                  <th>freshness</th>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>
                    amazing honey- just bought 500 and going to leave a huge tip
                  </td>
                  <td>SBF</td>
                  <td style={{ whiteSpace: "nowrap" }}>2 days</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>shit crazy fr</td>
                  <td>smolmooo</td>
                  <td style={{ whiteSpace: "nowrap" }}>6 days</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>
                    It doesn't compare to Phoenician Honey, but enjoyed
                    none-the-less. Great gift for Imbeciles
                  </td>
                  <td>smoltaleb</td>
                  <td style={{ whiteSpace: "nowrap" }}>19 days</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>
                    Arrived quite fast in 2 weeks to Germany. Stealth could be
                    improved. But price is good so everything is alright.
                  </td>
                  <td>Satsdart</td>
                  <td style={{ whiteSpace: "nowrap" }}>29 days</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>Great vendor! Bought with size at 333ea</td>
                  <td>smolzhu</td>
                  <td style={{ whiteSpace: "nowrap" }}>1 month</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>2 of 5</td>
                  <td>Found the jar difficult to open</td>
                  <td>Poordart</td>
                  <td style={{ whiteSpace: "nowrap" }}>1 month</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>New HunterxHunter coming out</td>
                  <td>0xdazai</td>
                  <td style={{ whiteSpace: "nowrap" }}>1 month</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>5 of 5</td>
                  <td>Bathing in this rn</td>
                  <td>Not Insilico</td>
                  <td style={{ whiteSpace: "nowrap" }}>1 month</td>
                </tr>
                <tr>
                  <td colSpan={4} id="pagination" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="footer">
        <a href="" id="footer_nav" target="_blank">
          support
        </a>{" "}
        | <a href="https://twitter.com/12yearoldwithcc">refunds</a>{" "}
      </div>
    </div>
  );
};

export default Construction;
