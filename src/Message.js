const Message = ({text}) => {
    return <div className={"message"}>
        <div className={"message-author"} >{text.author}</div>
        <div className={"message-text"} >{text.text}</div>
    </div>
};

export default Message;