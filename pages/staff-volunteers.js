import * as React from "react";
import Image from "next/image"
import prableen from "../components/img/prableen.jpg";
import SEO from "../components/SEO";

const Apps = (props) => {

    return (
        <>
            <SEO title="Volunteers Staff" />
            <div className="section section--gradient">
                <section className="hero ">
                    <div className="container py-4 px-4">
                        <h1 className="is-size-1 py-6  has-text-weight-bold">
                            OUR STAFF
                        </h1>


                        <div class="columns is-centered py-4">
                            <div class="column is-one-third">
                                <div class="card ">
                                    <div class="card-image">
                                        <Image src={prableen} 
                                        width={420} height={300} />
                                    </div>
                                    <div class="card-content ">
                                        <div class="media has-background-black radius">
                                            <div class="media-content">
                                                <div className="">
                                                    <p class="is-size-5 py-1 has-text-weight-bold has-text-centered has-text-light">
                                                        Prableen Kaur
                                                    </p>
                                                    <p class="px-4 subtitle py-3 is-6 has-text-light has-text-centered	has-text-weight-bold">
                                                        Originally from the United Kingdom, Prableen Kaur co-ordinates many of the Khalis projects and helps with much of the day-to-day running.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <h1 className="is-size-1 py-6  has-text-weight-bold">
                            OUR TEAM
                        </h1>
                        <p className="is-size-4 px-5">We wouldn’t be able to do what we do if it wasn’t for our talent. We are thankful to all of our team members past and present, and are always looking for more talent to join us.</p>
                        <p className="has-text-weight-bold">Special thanks to:-</p>
                        <table class="table is-bordered">

                            <tbody>
                                <tr className="columns">
                                    <td className=" column is-half">
                                        <ul className="is-bordered">
                                            <li><strong>Gurjeet Kaur</strong> (Fremont, CA)</li>
                                            <li><strong>Ishmeet Singh</strong> (Fremont, CA)</li>
                                            <li><strong>Gurbeer Singh</strong> (Fresno, CA)</li>
                                            <li><strong>Keerat Singh</strong> (Sacramento, CA)</li>
                                            <li><span ><strong>Manraj Singh</strong>&nbsp;</span><span >(Calgary, AB)</span></li>
                                            <li><span ><strong>Maneetpaul Singh</strong>&nbsp;</span><span >(Trumbull, CT)</span></li>
                                            <li><span ><strong>Harshdeep Singh</strong>&nbsp;</span><span >(Fremont, CA)</span></li>
                                            <li><span ><strong>Vikram Singh</strong>&nbsp;</span><span >(Sacramento, CA)</span></li>
                                            <li><strong>Inderpreet Kaur</strong> (Sacramento, CA)</li>
                                            <li><strong>Sukhvir Kaur</strong> (Fremont, CA)</li>
                                        </ul>
                                    </td>
                                    <td className=" column is-half">
                                        <ul className="is-bordered">
                                            <li><strong>Divjot Singh&nbsp;</strong><span >(Bengaluru, KA)</span></li>
                                            <li><span ><strong>Irvanjit Singh</strong>&nbsp;</span><span >(Toronto, ON)</span></li>
                                            <li><strong>Gauravjeet Singh</strong> (<span >Samrala, PU)</span></li>
                                            <li><span ><strong>Inder Singh</strong>&nbsp;</span><span >(Samrala, PU)</span></li>
                                            <li><span ><strong>Navdeep Singh</strong>&nbsp;</span><span >(Vancouver, BC)</span></li>
                                            <li><span ><strong>Triman Singh</strong>&nbsp;</span><span >(Windsor, ON)</span></li>
                                            <li><span ><strong>Japneet Kaur</strong>&nbsp;</span><span >(Hayward, CA)</span></li>
                                            <li><strong>Tarun Singh</strong> (Hayward, CA)</li>
                                        </ul></td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Apps;


