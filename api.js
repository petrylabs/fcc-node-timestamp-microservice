const getUnixDate = (dateString) => {
  let unixDate = ''
  const date = new Date(dateString);
  unixDate = date.getTime();
  return unixDate;
}

const getUtcDate = (dateString) => {
  let utcDate = '';
  const date = new Date(dateString);
  utcDate = date.toUTCString();
  return utcDate;
}

const isValidUnixDate = (dateString) => {
  const unixDateRegex = /^\d+$/;
  return unixDateRegex.test(dateString);
}

const isValidUtcDate = (dateString) => {
  return !isNaN(new Date(dateString))
}

const getTimestamp = (dateString) => {
  if (dateString && dateString.length > 0) {
    if (isValidUnixDate(dateString) == false
      && isValidUtcDate(dateString) == false) {
      return {
        'error': 'Invalid Date'
      }
    } else {
      dateString = isValidUnixDate(dateString) ? parseInt(dateString) : dateString;
      return {
        'unix': getUnixDate(dateString),
        'utc': getUtcDate(dateString)
      }
    }
  } else {
    const dateNow = Date.now();
    return {
      'unix': dateNow,
      'utc': getUtcDate(dateNow)
    }
  }
}

exports.getTimestamp = getTimestamp;
exports.getUnixDate = getUnixDate;
exports.getUtcDate = getUtcDate;
