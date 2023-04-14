const calculateCollectionTime = (collectionCreatedTime: number): string => {
  const timeDifference = new Date().getTime() - collectionCreatedTime;

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  if (days > 0) {
    if (days === 1) {
      return `${days} day ago`;
    } else {
      return `${days} days ago`;
    }
  } else if (hours > 0) {
    if (hours === 1) {
      return `${hours} hour ago`;
    } else {
      return `${hours} hours ago`;
    }
  } else if (minutes > 0) {
    if (minutes === 1) {
      return `${minutes} minute ago`;
    } else {
      return `${minutes} minutes ago`;
    }
  } else if (seconds > 0) {
    if (seconds === 1) {
      return `${seconds} second ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  } else {
    return "Just now";
  }
};

export default calculateCollectionTime;
