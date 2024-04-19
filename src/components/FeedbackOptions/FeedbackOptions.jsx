const FeedbackOptions = ({ options, handleclickFeedback }) => {
  return (
    <div className="block-feedback">
      {options.map(option => (
        <button
          key={option}
          className="button-feedback"
          type="button"
          style={{ textTransform: 'capitalize' }}
          onClick={() => handleclickFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
