import { InformationCircleIcon as Icon } from "@heroicons/react/20/solid";

// Use curly braces to display banner data
export default function Banner() {
  const bannerData = {
    icon: <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    version: 4,
    href: "/details",
  };

  return (
    <div className="banner-wrapper">
      <div className="flex">
        <div className="flex-shrink-0">{bannerData.icon}</div>
        <div className="banner-content">
          <p className="banner-text">
            A new software update is available. See what’s new in version {{}}
          </p>
          <p className="banner-details">
            <a href={bannerData.href} className="banner-details-link">
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
