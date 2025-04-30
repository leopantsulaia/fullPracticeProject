// Convert HTML string to valid JSX
export default function Pricing() {
  return (
    <div>
      <h2 className="title">Simple no-tricks pricing</h2>
      <hr />
      <a href="/buy" className="button">
        Buy Now <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
