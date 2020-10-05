package features;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import cucumber_test.*;

import java.util.Arrays;
import java.util.List;

public class adresseModification {

    List<Contrat> contrats = Arrays.asList(new Contrat());

    Abonne abonne= new Abonne("Abonne1", contrats);

    String nouvelleAdresse = "Nouvelle Adresse de l'abonné!";

    ChargeClientele chargeClientele = new ChargeClientele("Charge Clientele");

    Mouvement mouvement = new Mouvement();

    private ModificationService modificationService = new ModificationService();



    @Given("^un abonné avec une adresse principale \"([^\"]*)\" en France$")
    public void unAbonneAvecUneAdressePrincipaleEnFrance(String etat) {
        abonne.setAdressePrincipaleEtat(etat);
    }

    @When("le conseiller connecté à \\\"([^\\\"]*)\\\" modifie l'adresse de l'abonné")
    public void leChargeClienteleConnecteModifieLAdresseDeLAbonne(String canal) {

        modificationService.modificationAdresse(abonne, chargeClientele, canal, nouvelleAdresse,
                mouvement);
    }

    @Then("l'adresse de l'abonné modifiée est enregistrée sur l'ensemble des contrats de l'abonné")
    public void lAdresseDeLAbonneModifieeEstEnregistreeSurLEnsembleDesContratsDeLAbonne() {
        abonne.getContrats().forEach(contrat -> {
            Assert.assertEquals(nouvelleAdresse, contrat.getAdressePrincipale());
        });

    }

    @And("un mouvement de modification d'adresse est créé")
    public void unMouvementDeModificationDAdresseEstCree() {
        Assert.assertEquals(true, mouvement.isCreated());
    }
}
