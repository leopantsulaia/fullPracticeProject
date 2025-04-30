const saleOpen = {
  heading: "Get 25% off during our one-time sale",
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: "/one-time-sale",
};

const saleClosed = {
  heading: "Oops, you just missed out on our big sale!",
  description: "Now everything you like is back at full price. Sorry!",
};

export default function Callout() {
  const isSaleOpen = false;

  return (
    <section className="section">
      <div className="section-wrapper">
        <h2 className="section-heading">
          {isSaleOpen ? saleOpen.heading : saleClosed.heading}
        </h2>
        <p className="section-description">
          {isSaleOpen ? saleOpen.description : saleClosed.description}
        </p>
        {isSaleOpen ? (
          <a
            href={saleOpen.href}
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Get access to our one-time sale
          </a>
        ) : null}
      </div>
    </section>
  );
}
