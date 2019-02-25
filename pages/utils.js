export const isPhone = (phone) => {
  let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(phone.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};
