export const formatTime = (time) => {
  // Supprimer les millisecondes s'ils sont présents
  time = time.split(".")[0];
  // Diviser l'heure en heures, minutes et secondes
  const [hour, minute, second] = time.split(":");
  // Formater l'heure en ajoutant des zéros au besoin
  return `${hour}:${minute}`;
};
