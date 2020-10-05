package cucumber_test;

public class ModificationService {

    public void modificationAdresse(Abonne abonne, ChargeClientele chargeClientele, String canal, String nouvelleAdresse,
                                    Mouvement mouvement){
        chargeClientele.setCanalDeConnexion(canal);

        //Modification de l'adresse de l'abonné
        abonne.setAdressePrincipale(nouvelleAdresse);

        //Modification de l'adresse de l'abonné sur l'ensemble des contrats
        abonne.getContrats().forEach(contrat -> {
            contrat.setAdressePrincipale(abonne.getAdressePrincipale());
        });

        //Création d'un mouvement de modification d'adresse
        mouvement.setCreated(true);

    }
}
