import useCDN from "./hooks/useCDN";
import "./silkroad.css";
import { Link } from "react-router-dom";

const Checkout = (props) => {
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
          <span className="h2">Shopping cart</span>
          <br />
          <br />
          <div className="responsive-table">
            <table className="zebra">
              <tbody>
                <tr>
                  <th>seller</th>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>sub-total</th>
                  <th>postage</th>
                  <th>total</th>
                  <th width="75px">
                    hedged
                    <div
                      className="info_wrapper"
                      style={{ position: "relative", left: 5, top: 3 }}
                    >
                      <div className="info_folder">
                        <div className="info_icon">?</div>
                        <div className="info_message">
                          In the event of a refund you will be returned the
                          dollar value in bitcoins of any of the items in your
                          cart labeled "hedged". See the{" "}
                          <a href="">Buyer's Guide</a> for more details.
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <a href="">SmolGrrr(1)</a>
                  </td>
                  <td>
                    <a href="">Honey- Organic 160g</a>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <i className="fak fa-satoshisymbol-solid" />
                    125k
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <input
                      type="text"
                      name="quantity3169540"
                      defaultValue={1}
                      className="text money"
                    />{" "}
                    <span className="footnote">max: 6</span>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <i className="fak fa-satoshisymbol-solid" />
                    125k
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <div
                      className="dropdown_wrapper"
                      id="cat_dropdown_wrapper"
                      style={{
                        display: "inline-block",
                        position: "relative",
                        marginRight: 3,
                      }}
                    >
                      <select name="postage3169540">
                        <option value={445928}>Free Post (฿0.0000)</option>
                      </select>
                    </div>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <i className="fak fa-satoshisymbol-solid" />
                    125k
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>unhedged</td>
                </tr>
              </tbody>
            </table>
            <br />
            <button className="submit">update cart</button>
          </div>
          <br />
          <div className="container" style={{ display: "inline-block" }}>
            <span style={{ fontWeight: "bold", fontSize: 25 }}>
              Total: <i className="fak fa-satoshisymbol-solid" />
              125k
            </span>
            <br />
            <br />
            <br />
            <br />
            <form action="" method="post" acceptCharset="utf-8">
              <div style={{ display: "inline-block" }}>
                <div
                  className="info_wrapper"
                  style={{ top: 3, float: "right" }}
                >
                  <div className="info_folder">
                    <div className="info_icon">?</div>
                    <div className="info_message">
                      For more information about how we protect your privacy,
                      please read the <a href="">Buyer's Guide</a>.
                    </div>
                  </div>
                </div>
                Please enter your name and address <br />
                as it would be written on a letter:
                <br />
                <textarea
                  name="address"
                  cols={40}
                  rows={10}
                  className="textarea"
                  defaultValue={""}
                />
              </div>
              <br />
              <br />
              <button className="submit">place order</button>
              &nbsp;&nbsp;
            </form>
          </div>{" "}
        </div>
      </div>
      <div id="footer">
        <a href="" id="footer_nav" target="_blank">
          community forums
        </a>{" "}
        |{" "}
        <a href="" id="footer_nav" target="_blank">
          wiki
        </a>{" "}
        | <a href="../silkroad/support">support</a>{" "}
      </div>
    </div>
  );
};

export default Checkout;
