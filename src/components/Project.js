const Project = () => {
  let data = [
    {
      id: 1,
      img_url:
        "https://arjun40779.github.io/portfolio/project-icons/weather.PNG",
      title: "Weather App",
      text: "check live weather records of different cities",
      git_url: "https://github.com/arjun40779/weather",
      host_url: "https://g8c3r7.csb.app/",
    },

    {
      id: 2,
      img_url: "https://arjun40779.github.io/portfolio/project-icons/isro.png",
      title: "ISRO Centers",
      text: "Search for ISRO centers based on place, state and name",
      git_url:
        "https://github.com/arjun40779/ISRO-centres---Javascript-Project---uzvolykpmtfc",
      host_url: "https://grammatical-times.000webhostapp.com/index.html",
    },

    {
      id: 3,
      img_url:
        "https://pm1.aminoapps.com/6318/e6e1d4ecd2f09f881dff5a7528efaae9c975ba69_hq.jpg",
      title: "Pokemon Kingdom",
      text: "Browse pokemon stasts ",
      git_url: "https://github.com/arjun40779/pokemon",
      host_url: "https://pokemonkingdon.netlify.app/",
    },
    {
      id: 4,
      img_url:
        "https://arjun40779.github.io/portfolio/project-icons/movieDeck.png",
      title: "MovieDeck",
      text: "Browse through large database of movies",
      git_url: "https://github.com/arjun40779/MovieDeck",
      host_url: "https://gvpjqz.csb.app/",
    },
    {
      id: 5,
      img_url: "https://m.media-amazon.com/images/I/41oG9YdPj7L.jpg",
      title: "Zee5-clone",
      text: "ZEE5 is an Indian subscription video-on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises. ",
      git_url:
        "https://github.com/arjun40779/Zee5-Cinema-Clone---React-Project-1---k0oz8rtzq0n9",
      host_url: "https://zee5-clone-arjun4079.netlify.app/",
    },
    {
      id: 6,
      img_url:
        "https://www.designnominees.com/application/upload/Websites/2022/02/beyoung-folks-private-limited-147.jpg",
      title: "Beyoung-clone",
      text: "Beyoung is an online shopping site for men's and women's clothing in India. They offer a wide range of options, including: Tees, Topwear, Shirts, Boxers, Sweatpants, Joggers, Chino pants, Jeans, Pyjamas, Formal pants.",
      git_url:
        "https://github.com/arjun40779/Beyoung---React-Project-2---aihcnvtyjvs7",
      host_url: "https://beyoung-arjun40779.netlify.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3>PROJECTS</h3>
        <h5>Each project is a unique piece of development</h5>

        <div className="project-content">
          {data.map((item) => {
            return (
              <div key={item.id} className="project-items">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.img_url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                    {/*  <p className="card-text">
                {item.text}
              </p> */}
                    <div className="cardbtn">
                      <a href={item.git_url} className="btn " target="_blank">
                        Code &nbsp;&nbsp;
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a href={item.host_url} className="btn" target="_blank">
                        Live Demo &nbsp;
                        <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h4>More coming soon..</h4> */}
    </section>
  );
};
export default Project;
