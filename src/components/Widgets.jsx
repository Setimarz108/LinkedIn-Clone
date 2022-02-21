import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticles = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articlesLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articlesRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticles("latest News", "Top news - 9999 reader")}
      {newsArticles("latest News", "Top news - 9999 reader")}
      {newsArticles("latest News", "Top news - 9999 reader")}
      {newsArticles("latest News", "Top news - 9999 reader")}
    </div>
  );
}

export default Widgets;
