import { useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import Footer from "./Footer";
import styles from "../styles/gallery.module.scss";

const deviceStyles = {
  desktop: "col-12 col-sm-6 col-md-3",
  mobile: "col-6 col-sm-4 col-md-2",
};

function Thumb(props) {
  const { name, device, urlPath = "", imgPath } = props;
  const imgUrl = `https://raw.githubusercontent.com/jorgev259/silentwalker_wallpapers/main/thumbs${imgPath}`;

  return (
    <div
      className={classNames(
        "px-0",
        styles.thumb,
        styles[device],
        deviceStyles[device]
      )}
    >
      <Link legacyBehavior href={urlPath} scroll={false}>
        <a className="position-relative w-100 h-100 d-block">
          <picture>
            <source srcSet={`${imgUrl}.webp`} alt={name} type="image/webp" />
            <img src={`${imgUrl}.jpg`} alt={name} />
          </picture>
        </a>
      </Link>
    </div>
  );
}

function ModalElement(props) {
  const { name, show, imgPath, ext, urlPath = "" } = props;
  const router = useRouter();

  const imgUrl = `https://raw.githubusercontent.com/jorgev259/silentwalker_wallpapers/main/images${imgPath}${ext}`;
  const parentUrl = urlPath.split("/").slice(0, -1).join("/");

  const close = () => router.push(parentUrl);

  useEffect(() => {
    const checkKey = (e) => {
      if (e.key === "Escape" && show) router.push(parentUrl);
    };

    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  }, []);

  const onClose = (e) => {
    if (e.currentTarget === e.target) close();
  };

  return (
    <div
      className={classNames("modal fade", styles.modal, { show })}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={classNames("modal-body p-0")}>
            {show && <img className="w-100" src={imgUrl} alt={name} />}
          </div>
          <div className="modal-footer">
            <div className="mx-auto">{name}</div>
            <div className="mx-auto">
              <a
                href={imgUrl}
                className="modal-btn btn btn-outline-secondary"
                download
              >
                Download
              </a>
              <Link legacyBehavior href={parentUrl} scroll={false} shallow>
                <a>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-2 modal-btn"
                  >
                    Close
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery(props) {
  const { device = "desktop", images = [], modal, search, sort } = props;

  const filteredImages = images.filter((i) =>
    i.name.toLowerCase().includes(search)
  );
  const imageList =
    sort === "new"
      ? filteredImages.sort((a, b) => a.mtimeMs - b.mtimeMs).reverse()
      : filteredImages.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

  return (
    <div
      className={classNames("container-fluid flex-fill px-0", styles.root)}
      style={{ paddingTop: "60px" }}
    >
      <ModalElement {...(modal || {})} device={device} show={!!modal} p />
      <div className="col">
        <div className="row">
          {imageList.map((i) => (
            <Thumb key={i.urlPath} device={device} {...i} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
