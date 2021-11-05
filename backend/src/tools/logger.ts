const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;

export function debug(content: String) {
  const currentDateInMSOffsetted = (Date.now() - timeZoneOffset);
  const time = new Date(currentDateInMSOffsetted).toISOString().replace(/T/, ' ').replace(/\..+/, '');
  console.log('\x1b[37m%s \x1b[36m%s\x1b[0m', time, content);
}