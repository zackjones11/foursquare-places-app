import React from "react";
import styles from "./venue-list-item.module.css";

const VenueListItem = ({ venue, onClick }) => {
  const address = venue.location.formattedAddress.join(", ");

  return (
    <li data-id={venue.id} className={styles.listItem} onClick={onClick}>
      <div className={styles.name}>{venue.name}</div>
      <div className={styles.address}>{address}</div>
    </li>
  );
};

export default VenueListItem;
