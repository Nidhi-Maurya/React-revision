const paths = {
  alert: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </>
  ),
  briefcase: (
    <>
      <rect height="14" rx="2" width="20" x="2" y="7" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  coffee: (
    <>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </>
  ),
  filter: <polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3" />,
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 3-3 3" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  mail: (
    <>
      <rect height="16" rx="2" width="20" x="2" y="4" />
      <path d="m22 7-10 7L2 7" />
    </>
  ),
  mapPin: (
    <>
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  package: (
    <>
      <path d="m16.5 9.4-9-5.2" />
      <path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.3 7 12 12l8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  plus: (
    <>
      <line x1="12" x2="12" y1="5" y2="19" />
      <line x1="5" x2="19" y1="12" y2="12" />
    </>
  ),
  refresh: (
    <>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10" />
      <path d="M20.5 15a9 9 0 0 1-14.9 3.4L1 14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </>
  ),
  send: (
    <>
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  shoppingBag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  sliders: (
    <>
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="1" x2="7" y1="14" y2="14" />
      <line x1="9" x2="15" y1="8" y2="8" />
      <line x1="17" x2="23" y1="16" y2="16" />
    </>
  ),
  star: (
    <polygon points="12 2 15 8.5 22 9.2 16.8 13.9 18.3 21 12 17.4 5.7 21 7.2 13.9 2 9.2 9 8.5 12 2" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" x2="12" y1="2" y2="4" />
      <line x1="12" x2="12" y1="20" y2="22" />
      <line x1="4.93" x2="6.34" y1="4.93" y2="6.34" />
      <line x1="17.66" x2="19.07" y1="17.66" y2="19.07" />
      <line x1="2" x2="4" y1="12" y2="12" />
      <line x1="20" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="6.34" y1="19.07" y2="17.66" />
      <line x1="17.66" x2="19.07" y1="6.34" y2="4.93" />
    </>
  ),
  trash: (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  truck: (
    <>
      <rect height="13" width="15" x="1" y="3" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
};

export default function Icon({ name, size = 18, strokeWidth = 2, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export const AlertIcon = (props) => <Icon name="alert" {...props} />;
export const BriefcaseIcon = (props) => <Icon name="briefcase" {...props} />;
export const ChevronDownIcon = (props) => <Icon name="chevronDown" {...props} />;
export const ClockIcon = (props) => <Icon name="clock" {...props} />;
export const CoffeeIcon = (props) => <Icon name="coffee" {...props} />;
export const FilterIcon = (props) => <Icon name="filter" {...props} />;
export const HeartIcon = (props) => <Icon name="heart" {...props} />;
export const HelpIcon = (props) => <Icon name="help" {...props} />;
export const HomeIcon = (props) => <Icon name="home" {...props} />;
export const MailIcon = (props) => <Icon name="mail" {...props} />;
export const MapPinIcon = (props) => <Icon name="mapPin" {...props} />;
export const PackageIcon = (props) => <Icon name="package" {...props} />;
export const PlusIcon = (props) => <Icon name="plus" {...props} />;
export const RefreshIcon = (props) => <Icon name="refresh" {...props} />;
export const SearchIcon = (props) => <Icon name="search" {...props} />;
export const SendIcon = (props) => <Icon name="send" {...props} />;
export const ShieldIcon = (props) => <Icon name="shield" {...props} />;
export const ShoppingBagIcon = (props) => <Icon name="shoppingBag" {...props} />;
export const SlidersIcon = (props) => <Icon name="sliders" {...props} />;
export const StarIcon = (props) => <Icon name="star" {...props} />;
export const SunIcon = (props) => <Icon name="sun" {...props} />;
export const TrashIcon = (props) => <Icon name="trash" {...props} />;
export const TruckIcon = (props) => <Icon name="truck" {...props} />;
export const UserIcon = (props) => <Icon name="user" {...props} />;
export const ZapIcon = (props) => <Icon name="zap" {...props} />;
