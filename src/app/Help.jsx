import HelpPage from "../components/HelpPage";

function Help() {
  const message = "Hola, estoy compartiendo este mensaje desde mi app!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  return (
    <HelpPage />
  );
}

export default Help;
