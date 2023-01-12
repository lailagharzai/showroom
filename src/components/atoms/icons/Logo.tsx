function Logo() {
  const logoPath = "/assets/custodian_icon.svg"
  return  <img src={process.env.PUBLIC_URL + logoPath}/>;
}

export default Logo;
