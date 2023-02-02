export default function Section({ children, title }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}
