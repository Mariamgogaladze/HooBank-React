import "./topic.css";
type TopicProps = {
  title: string;
  description: string;
};
function Topic({ title, description }: TopicProps) {
  return (
    <div className="topic-div">
      <div>
        <h1 className="topic-h1">{title}</h1>
        <p className="topic-p">{description}</p>
      </div>
    </div>
  );
}

export default Topic;
