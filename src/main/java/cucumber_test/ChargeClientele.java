package cucumber_test;

public class ChargeClientele {

    /**
     * Nom du charge de clientele
     */
    private String nom;

    /**
     * Canal de connexion
     */
    private String canalDeConnexion;

    /**
     * Constructeur
     * @param nom
     */
    public ChargeClientele(String nom) {
        this.nom = nom;
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

    public String getCanalDeConnexion() {
        return canalDeConnexion;
    }

    public void setCanalDeConnexion(String canalDeConnexion) {
        this.canalDeConnexion = canalDeConnexion;
    }



}
