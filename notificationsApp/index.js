const Notification = (props) => {
  const { container, image, text, className } = props;
  const containerName = `cont ${container}`;
  return (
    <div className={containerName}>
      <img src={image} className="image" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="total-container">
    <div>
      <h1>Notifications</h1>
    </div>
    <div>
      <Notification
        container="info"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="information Message"
      />
      <Notification
        container="success"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="information Message"
      />
      <Notification
        container="warning"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="information Message"
      />
      <Notification
        container="error"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="info-msg"
        text="information Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
