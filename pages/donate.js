import * as React from "react";
import Seo from '../components/SEO'

const Apps = () => {

    return (
        <>
            <Seo title="Donate" />
            <div className="section section--gradient">
                <section className="hero ">
                    <div className="container py-4 px-4 is-flex is-flex-direction-column is-align-content-center	is-justify-content-center	">
                        <h1 className="is-size-1 px-5  pt-5 has-text-left has-text-weight-bold">
                            DONATE
                        </h1>
                        <p className="is-size-5 px-5 py-6 has-text-left">
                            Established in 2000, Khalis Foundation is a fast growing Sikhi portal on the net. With the grace of the Almighty Waheguroo, we have been able to add apps and services promoting education, tolerance, unity and the beautiful teachings of the Gurus. Sikh youth education, community awareness and outreach, high quality media libraries, children’s apps, gurbani apps–these are just SOME of the projects in the works by the sevadaars at Khalis Foundation.
                        </p>
                        <p className="is-size-5 py-3 has-text-weight-bold has-text-centered">
                            Your Donation is Tax Deductible.
                        </p>
                        <p className="is-size-5 py-3 has-text-centered">
                            Your Donation is Tax Deductible.
                        </p>
                        <p className="has-text-centered">No Paypal Login Required!
                        </p>
                        <p  className="has-text-centered">Khalis Foundation is a registered 501c3 in the USA. EIN: 46-2938976.</p>
                 
                        <form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_donations" />
                            <input type="hidden" name="business" value="techsupport@waheguroo.com" />
                            <input type="hidden" name="item_name" value="" />
                            <input type="hidden" name="item_number" value="Khalis Foundation General Donation" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="hidden" name="amount" id="amount_3f9b00b538d9cd8a013bc9f7ca9ca15f" value="" />
                            <input type="hidden" name="no_note" value="1" />
                            <input type="hidden" name="no_shipping" value="1" />
                            < input type="hidden" name="notify_url" value="https://khalisfoundation.org/wp-admin/admin-post.php?action=add_wpedon_button_ipn" />
                            <input type="hidden" name="lc" value="EN_US" />
                            <input type="hidden" name="bn" value="WPPlugin_SP" />
                            <input type="hidden" name="return" value="https://khalisfoundation.org/donation-confirmation/" />
                            <input type="hidden" name="cancel_return" value="" />
                            <input className="wpedon_paypalbuttonimage" type="image" src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_cc_147x47.png" border="0" name="submit" alt="Make your payments with PayPal. It is free, secure, effective."
                            //  style="border: none;"
                              /><noscript><img alt='' border='0'
                            //    style='border:none;display:none;' 
                               src='https://www.paypal.com/EN_US/i/scr/pixel.gif' width='1' height='1' /></noscript>
                            <img className="lazyload" alt="" border="0"
                            //  style="border:none;display:none;" 
                             src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201%201%22%3E%3C/svg%3E" data-src="https://www.paypal.com/EN_US/i/scr/pixel.gif" width="1" height="1" data-opt-lazy-loaded="false" />
                            <input type="hidden" name="87f57ddc529abbe88822777ebb376162" value="8c5bb24faab000254e32882405367c64" />
                            <input type="hidden" name="WP55T3S7XJS2" value="7H5W8K53HX" />
                            <input type="hidden" name="87f57ddc529abbe88822777ebb376162" value="8c5bb24faab000254e32882405367c64" />
                            <input type="hidden" name="WP55T3S7XJS2" value="7H5W8K53HX" />

                        </form>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Apps;

