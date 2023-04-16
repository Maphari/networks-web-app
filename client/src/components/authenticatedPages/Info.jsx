export default function (props) {
  const { isInformation } = props;
  return (
    <section className="w-[15%]">
      <button onClick={isInformation}>Back to main menu</button>
    </section>
  );
}
