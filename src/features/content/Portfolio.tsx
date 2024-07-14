const Portfolio = () => {
  return (
    <div>
      <div className="header-part">
        <div className="header-part-inner">
          <div className="name-with-profession">
            <div className="ff-calibri-bold -title resume-name">
              Perez Githumbi
            </div>
            <div className="resume-profession ff-calibri-bold -title">
              Fullstack Engineer| React | Laravel
            </div>
          </div>
          <div className="header-detail-block">
            <div className="address-col column -para">
              Nairobi, Kenya, https://github.com/pgm-githumbi <br />
            </div>
            <div className="column -para"> 0799829321 | </div>
            <div className="column -para">
              <span className="add-line-break"> youser@example.com </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me">
        <div>
          <p>
            Fullstack engineer with a proven understanding of state management
            with redux, routing with react-router, data fetching with
            react-query and redux. Also possess proven understanding of laravel
            db migration, authorisation and deployment. Had deployed projects to
            railway.app and github pages. Uses github actions to automate
            development workflows. Understands tailwind core concepts like flex
            and grid layouts.
          </p>
        </div>
      </div>
      <div className="template-block edu-block deecrease-mgn-bot">
        <h2 className="ff-calibri-bold -title">
          <span>Education</span>
        </h2>
        <div className="add-bot-mgn -para">
          <h3>
            <span className="degree">
              Bsc in Computer Science &nbsp;
              <i className="ff-calibri-regular ">
                September 2019 - October 2023
              </i>
            </span>
            <span className="college-name">
              Multimedia University of Kenya
              <i className="ff-times-regular "></i>
            </span>
          </h3>
          <div className="add-des-bottom-mgn">
            <p>
              Graduated with a second className honours upper division degree.
            </p>
          </div>
        </div>
      </div>
      <div className="template-block other-block deecrease-mgn-bot-2">
        <h2 className="ff-calibri-bold -title">
          <span>Projects</span>
        </h2>
        <div className="two-side add-bot-mgn -para">
          <div className="side-two">
            <h3>
              <span className="company-name">
                <abbr className="company">Fullstack Library Application </abbr>
                <i className="year"></i>
              </span>
              <span className="job-title"> React | Laravel | MySQL </span>
            </h3>
            <div className="add-des-bottom-mgn">
              <p>
                <a
                  href="https://pgm-githumbi.github.io/lib_app_react/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </p>
              <p>
                Students can request available books in the library, but only a
                staff member can approve a book borrow. Students can view
                approved book borrows. Students can sort all books by a list
                group component. Students need to create an account.
              </p>
            </div>
          </div>
        </div>
        <div className="two-side add-bot-mgn -para">
          <div className="side-two">
            <h3>
              <span className="company-name">
                <abbr className="company">UI Layout</abbr>
                <i className="year"></i>
              </span>
              <span className="job-title">
                {" "}
                React | Tailwind | Redux | DaisyUI{" "}
              </span>
            </h3>
            <div className="add-des-bottom-mgn">
              <p>
                <a
                  href="https://pgm-githumbi.github.io/ui_layout"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </p>
              <p>Shows routing, state management and tailwind skills.</p>
            </div>
          </div>
        </div>
        <div className="two-side add-bot-mgn -para">
          <div className="side-two">
            <h3>
              <span className="company-name">
                <abbr className="company">Expenses Tracker API Node js </abbr>
                <i className="year"></i>
              </span>
              <span className="job-title"> Nodejs | MongoDB </span>
            </h3>
            <div className="add-des-bottom-mgn">
              <p>
                Has login endpoints and users can CRUD expenses objects.
                Persists data in mongodb.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="template-block other-block deecrease-mgn-bot-2">
        <h2 className="ff-calibri-bold -title">
          <span>Experience</span>
        </h2>
        <div className="two-side add-bot-mgn -para">
          <div className="side-two">
            <h3>
              <span className="company-name">
                <abbr className="company">TVET tutor</abbr>
                <i className="year">May 2023 - September 2023</i>
              </span>
              <span className="job-title"></span>
            </h3>
            <div className="add-des-bottom-mgn">
              <p>
                Taught database systems, object oriented programming with C++
                and Systems Analysis and Design.
              </p>
              <p>All my students passed their TVET knec exams.</p>
            </div>
          </div>
        </div>
        <div className="two-side add-bot-mgn -para">
          <div className="side-two">
            <h3>
              <span className="company-name">
                <abbr className="company"></abbr>
                <i className="year"></i>
              </span>
              <span className="job-title"></span>
            </h3>
            <div className="add-des-bottom-mgn"></div>
          </div>
        </div>
      </div>
      <div style={{ width: "2px", height: "3.6648px" }}></div>
    </div>
  );
};

export default Portfolio;
