import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

function DeviceToggle(props) {
  const { router } = props;
  const { query } = router;
  const { device = "desktop" } = query;

  const nextDevice = device === "desktop" ? "mobile" : "desktop";
  const active = device === "mobile";

  return (
    <>
      <div className="d-inline-block">
        <img
          src="/images/assets/laptop.png"
          alt=""
          style={{ height: "30px", width: "40px" }}
        />
      </div>

      <Link legacyBehavior href={router.asPath.replace(device, nextDevice)}>
        <a>
          <div className="toggle d-flex align-items-center">
            <div className={classNames("handle", { active })} />
          </div>
        </a>
      </Link>

      <div className="d-inline-block">
        <img
          src="/images/assets/phone.png"
          alt=""
          style={{ height: "30px", width: "22px" }}
        />
      </div>
    </>
  );
}

function SortToggle(props) {
  const { sort, setSort } = props;
  const active = sort === "name";
  const nextSort = sort === "name" ? "new" : "name";

  const handleToggle = () => setSort(nextSort);

  return (
    <>
      <div className="d-inline-block">
        <img
          src="/images/assets/clock.png"
          alt=""
          style={{ height: "27px", width: "27px" }}
        />
      </div>

      <div className="toggle d-flex align-items-center" onClick={handleToggle}>
        <div className={classNames("handle", { active })} />
      </div>

      <div className="d-inline-block">
        <img
          src="/images/assets/name.png"
          alt=""
          style={{ height: "25px", width: "25px" }}
        />
      </div>
    </>
  );
}

function DropdownItem(props) {
  const { href, name, currentUrl } = props;
  const active = href === currentUrl;

  return (
    <Link legacyBehavior href={href} prefetch={false}>
      <a className={classNames("dropdown-item", { active })}>{name}</a>
    </Link>
  );
}

export default function Navbar(props) {
  const { sort, setSort, setSearch } = props;
  const sortProps = { sort, setSort };

  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="row w-100 justify-content-between justify-content-md-start">
          <div className="col-auto">
            <Link legacyBehavior href="/">
              <a className="navbar-brand d-flex align-items-center me-0">
                <img
                  src="/images/assets/tricorn.png"
                  alt=""
                  style={{ height: "32px", width: "32px" }}
                />
              </a>
            </Link>
          </div>

          <div className="navbar-nav flex-row col-auto px-0 d-none d-md-flex">
            <NavItems />
          </div>

          <div className="col-auto d-flex align-items-center">
            <div
              className="d-flex nav-item my-auto align-items-center"
              style={{ height: "30px" }}
            >
              <DeviceToggle router={router} />
            </div>
          </div>

          <div className="col-auto d-none d-sm-flex align-items-center">
            <div
              className="d-flex nav-item my-auto align-items-center"
              style={{ height: "30px" }}
            >
              <SortToggle {...sortProps} />
            </div>
          </div>

          <div className="col-auto d-flex d-md-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarToggle">
            <div className="navbar-nav">
              <div className="nav-item d-block d-sm-none my-2">
                <div
                  className="d-flex nav-item my-auto align-items-center"
                  style={{ height: "30px" }}
                >
                  <SortToggle {...sortProps} />
                </div>
              </div>
              <NavItems />
              <div className="nav-item mb-3">
                <input
                  className="w-100 h-100 form-control"
                  type="search"
                  placeholder="Search"
                  onChange={(ev) => setSearch(ev.target.value.toLowerCase())}
                />
              </div>
            </div>
          </div>

          <div className="col pe-0 d-none d-md-flex">
            <input
              className="w-100 h-100 form-control"
              type="search"
              placeholder="Search"
              onChange={(ev) => setSearch(ev.target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItems() {
  const router = useRouter();
  const { query } = router;
  const { device = "desktop" } = query;

  return (
    <>
      <div className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Destiny 1
        </a>
        <div className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
          <DropdownItem
            href={`/destiny1/${device}`}
            name="Wallpapers"
            currentUrl={router.asPath}
          />
          <a
            className="dropdown-item"
            href={
              device === "desktop"
                ? "https://drive.google.com/drive/folders/1drejXFUS5JIKP2WgqqdM0wSa0kY60cuI"
                : "https://drive.google.com/drive/folders/1d4FLAlJ1Thn3lx3M-PFOrDCbebNAbAGB"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            Download All
          </a>
        </div>
      </div>

      <div className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Destiny 2
        </a>
        <div className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
          <DropdownItem
            href={`/destiny2/${device}/emblems`}
            name="Emblems"
            currentUrl={router.asPath}
          />
          <DropdownItem
            href={`/destiny2/${device}/seals`}
            name="Seals"
            currentUrl={router.asPath}
          />
          <DropdownItem
            href={`/destiny2/${device}/bonus`}
            name="Bonus"
            currentUrl={router.asPath}
          />
          <a
            className="dropdown-item"
            href={
              device === "desktop"
                ? "https://drive.google.com/drive/folders/1__8jBXGy14tL12ciEoqBepwxWeqJaD_7"
                : "https://drive.google.com/drive/folders/1ZG-3BjxfRiEMq8so0h8G5B2bqXeFx1oK"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            Download All
          </a>
        </div>
      </div>

      <div className="nav-item">
        <Link legacyBehavior href="/clanbanners">
          <a className="nav-link">Clan Banners</a>
        </Link>
      </div>

      <div className="nav-item">
        <Link legacyBehavior href="/info">
          <a className="nav-link">Info</a>
        </Link>
      </div>
    </>
  );
}
