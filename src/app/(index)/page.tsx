"use client";
import React, { useState, useEffect } from "react";

const page = () => {
    const [rotate, setRotate] = useState(0);
    const [is, setIs] = useState(true);

    useEffect(() => {
        // over flow check
        if (rotate >= 360 || rotate <= -360) {
            setTimeout(() => {
                setIs(false);
                setTimeout(() => {
                    setRotate(0);
                }, 300);
            }, 1250);
        } else setIs(true);
    }, [rotate]);

    return (
        <div className="home py-5">
            <div className="container">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div id="smart-carousel">
                            <div id="s-carousel-circle">
                                <div className="s-circle" style={{ rotate: `${rotate}deg`, transitionDuration: !is ? "initial" : ` 1250ms` }}>
                                    <div className={`circle-w ${[0, 360, -360].includes(rotate) && "active"}`}>
                                        <img src="https://blog.clover.com/wp-content/uploads/2021/06/plates-of-pasta-and-salad.jpg" alt="img" className="img-fluid" />
                                        <div className="circle-c">
                                            <p className="mb-0 fw-bold">
                                                # Design & Developed by{" "}
                                                <a href="https://kawsarbinsiraj.github.io/" target="_blank">
                                                    Kawsar Bin Siraj
                                                </a>
                                            </p>
                                            <h2 className="mb-2 display-4 text-uppercase"> LOTEK</h2>
                                            <h2 className="mb-2 display-1 text-uppercase fw-bold"> processed</h2>
                                        </div>
                                    </div>
                                    <div className={`circle-w ${[90, -270].includes(rotate) && "active"}`}>
                                        <img src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" alt="img" className="img-fluid" />
                                        <div className="circle-c">
                                            <p className="mb-0 fw-bold">
                                                # Design & Developed by{" "}
                                                <a href="https://kawsarbinsiraj.github.io/" target="_blank">
                                                    Kawsar Bin Siraj
                                                </a>
                                            </p>
                                            <h2 className="mb-2 display-4 text-uppercase"> LOTEK</h2>
                                            <h2 className="mb-2 display-1 text-uppercase fw-bold"> processed</h2>
                                        </div>
                                    </div>
                                    <div className={`circle-w ${[180, -180].includes(rotate) && "active"}`}>
                                        <img
                                            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg"
                                            alt="img"
                                            className="img-fluid"
                                        />
                                        <div className="circle-c">
                                            <p className="mb-0 fw-bold">
                                                # Design & Developed by{" "}
                                                <a href="https://kawsarbinsiraj.github.io/" target="_blank">
                                                    Kawsar Bin Siraj
                                                </a>
                                            </p>
                                            <h2 className="mb-2 display-4 text-uppercase"> LOTEK</h2>
                                            <h2 className="mb-2 display-1 text-uppercase fw-bold"> processed</h2>
                                        </div>
                                    </div>
                                    <div className={`circle-w ${[270, -90].includes(rotate) && "active"}`}>
                                        <img
                                            src="https://images.ctfassets.net/sahy2rpqbnsp/2JGK0TGHUNEjPZFo1HkStm/64ee6304baf625ac5ff7a89da919e6a7/SPF_-_05.jpg?w=1920&h=1080&fm=jpg&q=50&fit=fill"
                                            alt="img"
                                            className="img-fluid"
                                        />
                                        <div className="circle-c">
                                            <p className="mb-0 fw-bold">
                                                # Design & Developed by{" "}
                                                <a href="https://kawsarbinsiraj.github.io/" target="_blank">
                                                    Kawsar Bin Siraj
                                                </a>
                                            </p>
                                            <h2 className="mb-2 display-4 text-uppercase"> LOTEK</h2>
                                            <h2 className="mb-2 display-1 text-uppercase fw-bold"> processed</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="s-carousel-content" className="pt-5 mt-5">
                                <div className="row mb-5">
                                    <div className="col-lg-8">
                                        <div id="content-widgets" className="d-flex align-items-center gap-4">
                                            <button
                                                disabled={!is}
                                                className="btn fs-1 border-0"
                                                style={{ rotate: "180deg" }}
                                                onClick={() => {
                                                    setRotate(rotate - 90);
                                                }}
                                            >
                                                &#10139;
                                            </button>
                                            <div className="carousel-c d-flex align-items-center justify-content-between gap-4">
                                                <div className={`content-w ${[0, 360, -360].includes(rotate) && "active"}`}>
                                                    <img src="https://blog.clover.com/wp-content/uploads/2021/06/plates-of-pasta-and-salad.jpg" alt="img" className="img-fluid" />
                                                    <p className="mb-0">Suspendisse non nisl sit</p>
                                                </div>
                                                <div className={`content-w ${[90, -270].includes(rotate) && "active"}`}>
                                                    <img src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" alt="img" className="img-fluid" />
                                                    <p className="mb-0">Lorem, ipsum dolor sit.</p>
                                                </div>
                                                <div className={`content-w ${[180, -180].includes(rotate) && "active"}`}>
                                                    <img
                                                        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg"
                                                        alt="img"
                                                        className="img-fluid"
                                                    />
                                                    <p className="mb-0">Suspendisse feugiat.</p>
                                                </div>
                                                <div className={`content-w ${[270, -90].includes(rotate) && "active"}`}>
                                                    <img
                                                        src="https://images.ctfassets.net/sahy2rpqbnsp/2JGK0TGHUNEjPZFo1HkStm/64ee6304baf625ac5ff7a89da919e6a7/SPF_-_05.jpg?w=1920&h=1080&fm=jpg&q=50&fit=fill"
                                                        alt="img"
                                                        className="img-fluid"
                                                    />
                                                    <p className="mb-0">Etiam ultricies nisilorem</p>
                                                </div>
                                            </div>
                                            <button
                                                disabled={!is}
                                                className="btn fs-1 border-0"
                                                onClick={() => {
                                                    setRotate(rotate + 90);
                                                }}
                                            >
                                                &#10139;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
