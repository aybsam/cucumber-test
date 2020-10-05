package cucumber_test;

import java.util.List;

public class Abonne {

    /**
     * Nom de l'abonné
     */
    private String nom;

    /**
     * L'adresse principale de l'abonné.
     */
    private String adressePrincipale;

    /**
     * Etat de l'adresse principale de l'abonné.
     */
    private String adressePrincipaleEtat;

    /**
     * Liste des contrats de l'abonné.
     */
    private List<Contrat> contrats;

    /**
     * Constructeur
     * @param nom
     */
    public Abonne(String nom, List<Contrat> contrats) {
        this.nom = nom;
        this.contrats = contrats;
    }


    /**
     * Setters and Getters
     */
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdressePrincipaleEtat() {
        return adressePrincipaleEtat;
    }

    public void setAdressePrincipaleEtat(String adressePrincipaleEtat) {
        this.adressePrincipaleEtat = adressePrincipaleEtat;
    }

    public List<Contrat> getContrats() {
        return contrats;
    }

    public void setContrats(List<Contrat> contrats) {
        this.contrats = contrats;
    }

    public String getAdressePrincipale() {
        return adressePrincipale;
    }

    public void setAdressePrincipale(String adressePrincipale) {
        this.adressePrincipale = adressePrincipale;
    }


}
