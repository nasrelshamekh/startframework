

export default function Footer() {
    return (
        <>
            <section className="footer-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 text-white pt-5 pb-5 text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 text-white pt-5 pb-5 text-center">
                            <h3>AROUND THE WEB</h3>
                            <div>
                                <i className="fa-brands fa-facebook mx-1 icon"></i>
                                <i className="fa-brands fa-twitter mx-1 icon"></i>
                                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                                <i className="fa-solid fa-globe mx-1 icon"></i>
                            </div>
                        </div>
                        <div className="col-md-4 text-white pt-5 pb-5 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-white text-center p-3 footer2-bg">
                <p>Copyright © Your Website 2025</p>
            </div>
        </>
    )
}
