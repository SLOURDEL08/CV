import "../../assets/css/App.css";

function ScrollSkills({ applyBorderRadius }) {
  return (
    <div class="image-container">
      <div
        className={`overlist ${applyBorderRadius ? "border-radius" : ""}`}
      ></div>
      <div
        className={`overlist overight ${
          applyBorderRadius ? "border-radius" : ""
        }`}
      ></div>
      <div class="image-list">
        <div>
          <img src="./images/git.png" alt="logo wordpress" />
        </div>
        <div>
          <img src="./images/js.png" alt="logo javascript" />
        </div>
        <div>
          <img src="./images/reactlogo.png" alt="logo tagmanager" />
        </div>
        <div>
          <img src="./images/seo.png" alt="logo seo" />
        </div>
        <div>
          <img src="./images/git.png" alt="logo git" />
        </div>
        <div>
          <img src="./images/wp.png" alt="logo wordpress" />
        </div>
        <div>
          <img src="./images/photoshop.png" alt="logo javascript" />
        </div>
        <div>
          <img src="./images/figma.png" alt="logo wordpress" />
        </div>
        <div>
          <img src="./images/tagmanager.webp" alt="logo javascript" />
        </div>
        <div>
          <img src="./images/reactlogo.png" alt="logo tagmanager" />
        </div>
        <div>
          <img src="./images/seo.png" alt="logo seo" />
        </div>
        <div>
          <img src="./images/git.png" alt="logo git" />
        </div>
        <div>
          <img src="./images/wp.png" alt="logo wordpress" />
        </div>
        <div>
          <img src="./images/js.png" alt="logo javascript" />
        </div>
      </div>
    </div>
  );
}

export default ScrollSkills;
