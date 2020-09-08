export default (timestamp = 0) => {
  const datetime = new Date(timestamp);
  const year = datetime.getFullYear();
  const month = `${datetime.getMonth() + 1 < 10 ? '0' : ''}${datetime.getMonth() + 1}`;
  const date = `${datetime.getDate() < 10 ? '0' : ''}${datetime.getDate()}`;
  const hour = `${datetime.getHours() < 10 ? '0' : ''}${datetime.getHours()}`;
  const minute = `${datetime.getMinutes() < 10 ? '0' : ''}${datetime.getMinutes()}`;
  const second = `${datetime.getSeconds() < 10 ? '0' : ''}${datetime.getSeconds()}`;
  if (+hour === 0 && +minute === 0 && +second === 0) {
    return `${year}-${month}-${date}`;
  }
  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};
