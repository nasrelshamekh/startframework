import { useEffect } from "react";


export default function Contact() {

    useEffect(() => {
    // This runs after the component renders — so the inputs exist in the DOM
    function removeClass(inputId) {
      const input = document.getElementById(inputId);
      const label = document.querySelector(`label[for='${inputId}']`);

      if (!input || !label) return;

      input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
          if (!label.classList.contains("top-0")) {
            label.classList.add("top-0");
          }
        } else {
          label.classList.remove("top-0");
        }
      });
    }

    // Call for each input
    ["userName", "userAge", "userEmail", "userPassword"].forEach(removeClass);
  }, []); // empty deps → run once after mount

    return (
        <>

            <section className="min-vh-100 pt-3 container-fluid">
                <h2 className="mb-3 fs-1 fw-bolder text-center pt-4 portfolio-header">CONTACT SECTION</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="port-line me-3"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="port-line ms-3"></div>
                </div>
                <form className="w-50 p-3 mx-auto mt-5">
                    <label htmlFor="userName" className="position-relative top-label">userName: </label>
                    <input id="userName" type="text" placeholder="userName" className="form-control border-0 border-bottom py-3 position-relative" />
                    <label htmlFor="userAge" className="position-relative top-label">userAge: </label>
                    <input id="userAge" type="text" placeholder="userAge" className="form-control border-0 border-bottom py-3 position-relative" />
                    <label htmlFor="userEmail" className="position-relative top-label">userEmail: </label>
                    <input id="userEmail" type="email" placeholder="userEmail" className="form-control border-0 border-bottom py-3 position-relative" />
                    <label htmlFor="userPassword" className="position-relative top-label">userPassword: </label>
                    <input id="userPassword" type="password" placeholder="userPassword" className="form-control border-0 border-bottom py-3 position-relative" />
                    <button className="btn mt-4 text-white form-button">Send Message</button>
                </form>
            </section>

        </>
    )
}
