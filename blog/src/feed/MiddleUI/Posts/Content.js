const postContent = ({
  text_weight='600',
  content
}) => {
  return (
    <div>
      <p
        style={{
        fontWeight: text_weight,
        }}>{content}</p>
    </div>
  );
}
export default postContent;
