import React from "react";
import styles from "./venue-list-item.module.css";

const VenueListItem = ({ venue, onClick }) => (
  <li className={styles.listItem} onClick={() => onClick(venue)}>
    <div className={styles.name}>{venue.name}</div>
    <div className={styles.address}>
      {venue.location.formattedAddress.join(", ")}
    </div>
  </li>
);

export default VenueListItem;
